import { ROWS_PER_PAGE } from '@/store/prefs';
import { PAGE } from '@/config/query-params';

export default {
  computed: {
    indexFrom() {
      return Math.max(0, 1 + this.perPage * (this.page - 1));
    },

    indexTo() {
      return Math.min(this.filteredRows.length, this.indexFrom + this.perPage - 1);
    },

    totalPages() {
      return Math.ceil(this.filteredRows.length / this.perPage );
    },

    showPaging() {
      return this.paging && this.totalPages > 1;
    },

    pagingDisplay() {
      const opt = {
        ...(this.pagingParams || {}),

        count: this.filteredRows.length,
        pages: this.totalPages,
        from:  this.indexFrom,
        to:    this.indexTo,
      };

      return this.$store.getters['i18n/t'](this.pagingLabel, opt);
    },

    pagedRows() {
      if ( this.paging ) {
        return this.filteredRows.slice(this.indexFrom - 1, this.indexTo);
      } else {
        return this.filteredRows;
      }
    }
  },

  data() {
    const perPage = this.getPerPage();

    return { page: this.$route.query[PAGE] || 1, perPage };
  },

  watch: {
    '$route.query.page': {
      handler(p) {
        let page;

        if (p) {
          page = parseInt(p, 10);

          if (isNaN(page)) {
            page = 1;
          }
        } else {
          page = 1;
        }

        if (this.page !== page) {
          this.page = page;
        }
      },
      deep:      true,
      immediate: true
    },

    pagedRows() {
      // Go to the last page if we end up "past" the last page because the table changed

      const from = this.indexFrom;
      const last = this.filteredRows.length;

      if ( this.page > 1 && from > last ) {
        this.setPage(this.totalPages);
      }
    },

    sortFields(old, neu) {
      if ( old.join(',') === neu.join(',') ) {
        // Nothing really changed

      }

      // Go back to the first page when sort changes
      this.setPage(1);
    },
  },

  methods: {
    getPerPage() {
      // perPage can not change while the list is displayed
      let perPage = this.rowsPerPage || 0;

      if ( perPage <= 0 ) {
        perPage = parseInt(this.$route.query.limit, 10) || 0;
      }

      if ( perPage <= 0 ) {
        perPage = parseInt(this.$store.getters['prefs/get'](ROWS_PER_PAGE), 10) || 0;
      }

      // This should ideally never happen, but the preference value could be invalid, so return something...
      if ( perPage <= 0 ) {
        perPage = 10;
      }

      return perPage;
    },

    setPage(num) {
      if (this.page === num) {
        return;
      }
      // Page will change in response to the query string changing
      // This avoids pagedRows being computed twiece
      if ( num === 1 ) {
        this.$router.applyQuery({ [PAGE]: undefined });
      } else {
        this.$router.applyQuery({ [PAGE]: num });
      }
    },

    goToPage(which) {
      let page;

      switch (which) {
      case 'first':
        page = 1;
        break;
      case 'prev':
        page = Math.max(1, this.page - 1 );
        break;
      case 'next':
        page = Math.min(this.totalPages, this.page + 1 );
        break;
      case 'last':
        page = this.totalPages;
        break;
      }

      this.setPage(page);
    }
  }
};
