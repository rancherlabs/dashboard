import { get } from '@shell/utils/object';
import { addObject, addObjects, isArray, removeAt } from '@shell/utils/array';

export const DEFAULT_ADV_FILTER_COLS_VALUE = 'allcols';
export const ADV_FILTER_ALL_COLS_VALUE = 'allcols';
export const ADV_FILTER_ALL_COLS_LABEL = 'All Columns';

export default {
  data() {
    return {
      searchQuery:    null,
      previousFilter: null,
      previousResult: null,
    };
  },

  computed: {
    searchFields() {
      const out = columnsToSearchField(this.columns);

      if ( this.extraSearchFields ) {
        addObjects(out, this.extraSearchFields);
      }

      return out;
    },

    /*
    subFields: computed('subHeaders.@each.{searchField,name}', 'extraSearchSubFields.[]', function() {
      let out = headersToSearchField(get(this, 'subHeaders'));

      return out.addObjects(get(this, 'extraSearchSubFields') || []);
    }),
    */
    filteredRows() {
      console.log('FILTERING ROWS...', this.advancedFiltering, this.searchQuery);

      if (!this.advancedFiltering) {
        return this.handleFiltering();
      } else {
        return this.handleAdvancedFiltering();
      }
    },
  },

  methods: {
    handleAdvancedFiltering() {
      this.subMatches = null;
      const out = (this.arrangedRows || []).slice();

      if (this.searchQuery.length) {
        const res = out.filter((row) => {
          return this.searchQuery.every((f) => {
            console.log('filter applied', f);

            if (f.prop === ADV_FILTER_ALL_COLS_VALUE) {
              const allCols = this.columnOptions.slice(1);
              let searchFields = [];

              allCols.forEach((col) => {
                if (col.value.includes('[') && col.value.includes(']')) {
                  searchFields = searchFields.concat(JSON.parse(col.value));
                } else {
                  searchFields.push(col.value);
                }
              });

              console.log('searchFields for allCols', searchFields);

              return handleStringSearch(searchFields, [f.value], row);
            } else {
              if (f.prop.includes('[') && f.prop.includes(']')) {
                return handleStringSearch(JSON.parse(f.prop), [f.value], row);
              }

              return handleStringSearch([f.prop], [f.value], row);
            }
          });
        });

        console.log('ADV FILTER RESULTS', res);

        return res;
      }

      // return arrangedRows array if we don't have anything to search for...
      return out;
    },

    handleFiltering() {
      const searchText = (this.searchQuery || '').trim().toLowerCase();
      let out;

      if ( searchText && this.previousResult && searchText.startsWith(this.previousFilter) ) {
        // If the new search is an addition to the last one, we can start with the same set of results as last time
        // and filter those down, since adding more searchText can only reduce the number of results.
        out = this.previousResult.slice();
      } else {
        this.previousResult = null;
        out = (this.arrangedRows || []).slice();
      }

      this.previousFilter = searchText;

      if ( !searchText.length ) {
        this.subMatches = null;
        this.previousResult = null;

        return out;
      }

      const searchFields = this.searchFields;
      const searchTokens = searchText.split(/\s*[, ]\s*/);
      const subSearch = this.subSearch;
      const subFields = this.subFields;
      const subMatches = {};

      console.log('searchFields', searchFields);
      console.log('searchTokens', searchTokens);

      for ( let i = out.length - 1 ; i >= 0 ; i-- ) {
        const row = out[i];
        let hits = 0;
        let mainFound = true;

        mainFound = handleStringSearch(searchFields, searchTokens, row);
        console.log('mainFound', mainFound);
        // for ( let j = 0 ; j < searchTokens.length ; j++ ) {
        //   let expect = true;
        //   let token = searchTokens[j];

        //   if ( token.substr(0, 1) === '!' ) {
        //     expect = false;
        //     token = token.substr(1);
        //   }

        //   console.log('token', token);
        //   console.log('row', row);
        //   console.log('matches(searchFields, token, row) ', matches(searchFields, token, row) );

        //   if ( token && matches(searchFields, token, row) !== expect ) {
        //     mainFound = false;
        //     break;
        //   }
        // }

        if ( subFields && subSearch) {
          const subRows = row[subSearch] || [];

          for ( let k = subRows.length - 1 ; k >= 0 ; k-- ) {
            let subFound = true;

            for ( let l = 0 ; l < searchTokens.length ; l++ ) {
              let expect = true;
              let token = searchTokens[l];

              if ( token.substr(0, 1) === '!' ) {
                expect = false;
                token = token.substr(1);
              }

              if ( matches(subFields, token, subRows[k]) !== expect ) {
                subFound = false;
                break;
              }
            }

            if ( subFound ) {
              hits++;
            }
          }

          subMatches[get(row, this.keyField)] = hits;
        }

        if ( !mainFound && hits === 0 ) {
          removeAt(out, i);
        }
      }

      this.subMatches = subMatches;
      this.previousResult = out;

      return out;
    }
  },

  watch: {
    arrangedRows(q) {
      // The rows changed so the old filter result is no longer useful
      this.previousResult = null;
    }
  },
};

function columnsToSearchField(columns) {
  const out = [];

  (columns || []).forEach((column) => {
    const field = column.search;

    if ( field ) {
      if ( typeof field === 'string' ) {
        addObject(out, field);
      } else if ( isArray(field) ) {
        addObjects(out, field);
      }
    } else if ( field === false ) {
      // Don't add the name
    } else {
      // Use value/name as the default
      addObject(out, column.value || column.name);
    }
  });

  return out.filter(x => !!x);
}

const ipLike = /^[0-9a-f\.:]+$/i;

function handleStringSearch(searchFields, searchTokens, row) {
  for ( let j = 0 ; j < searchTokens.length ; j++ ) {
    let expect = true;
    let token = searchTokens[j];

    if ( token.substr(0, 1) === '!' ) {
      expect = false;
      token = token.substr(1);
    }

    console.log('token, row, matches(searchFields, token, row) ', token, row, matches(searchFields, token, row) );

    if ( token && matches(searchFields, token, row) !== expect ) {
      return false;
    }

    return true;
  }
}

function matches(fields, token, item) {
  console.log('MATCHES.....!:!:!:!:!:!:!', fields, token, item);
  for ( let field of fields ) {
    if ( !field ) {
      continue;
    }

    let modifier;
    let val;

    if (typeof field === 'function') {
      val = field(item);
    } else {
      const idx = field.indexOf(':');

      if ( idx > 0 ) {
        modifier = field.substr(idx + 1);
        field = field.substr(0, idx);
      }

      if ( field.includes('.') ) {
        val = get(item, field);
      } else {
        val = item[field];
      }
    }

    if ( val === undefined ) {
      continue;
    }

    val = (`${ val }`).toLowerCase();
    if ( !val ) {
      continue;
    }

    if ( !modifier ) {
      if ( val.includes(token) ) {
        return true;
      }
    } else if ( modifier === 'exact' ) {
      if ( val === token ) {
        return true;
      }
    } else if ( modifier === 'ip' ) {
      const tokenMayBeIp = ipLike.test(token);

      if ( tokenMayBeIp ) {
        const re = new RegExp(`(?:^|\\.)${ token }(?:\\.|$)`);

        if ( re.test(val) ) {
          return true;
        }
      }
    } else if ( modifier === 'prefix' ) {
      if ( val.indexOf(token) === 0) {
        return true;
      }
    }
  }

  return false;
}
