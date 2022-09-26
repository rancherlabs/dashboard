import { classify } from '@shell/plugins/dashboard-store/classify';
import lookup from '@shell/plugins/lookup';
const GITHUB_BASE_API = 'https://api.github.com';

const fetchGithubAPI = async(endpoint) => {
  const response = await fetch(`${ GITHUB_BASE_API }/${ endpoint }`);
  // TODO: Look for rate limit headers and handle appropriately https://docs.github.com/en/rest/guides/best-practices-for-integrators#dealing-with-secondary-rate-limits

  // If rate-limit is exceeded, we should wait until the rate limit is reset
  if (response.status === 403) {
    const resetTime = new Date(response.headers.get('X-RateLimit-Reset') * 1000);

    throw new Error(`Rate limit exceeded. Try again at ${ resetTime }`);
  }

  if (!response.ok) {
    throw response;
  }

  return await response.json();
};

export const getters = {
  classify: (state, getters, rootState) => (obj) => {
    console.log('🚀 ~ file: github.js ~ line 25 ~ state', state);
    console.log('🚀 ~ file: github.js ~ line 25 ~ rootState', rootState);

    return lookup('github', obj.type, undefined, rootState);
  }
};

export const actions = {
  async apiList(ctx, {
    username, endpoint, repo, branch
  }) {
    try {
      switch (endpoint) {
      case 'branches': {
        return await fetchGithubAPI(`repos/${ username }/${ repo }/branches?sort=updated&per_page=100&direction=desc`);
      }
      case 'repo': {
        return await fetchGithubAPI(`repos/${ username }/${ repo }`);
      }
      case 'commits': {
        return await fetchGithubAPI(`repos/${ username }/${ repo }/commits?sha=${ branch }&sort=updated&per_page=100`);
      }
      case 'search': {
        // Fetch for a specific branches
        if (username && repo && branch) {
          const response = await fetchGithubAPI(`repos/${ username }/${ repo }/branches/${ branch }`);

          return [response];
        }

        // Fetch for repos
        const response = await fetchGithubAPI(`search/repositories?q=repo:${ username }/${ repo }`);

        if (response) {
          return response.items;
        }
      }
      }

      return await fetchGithubAPI(`users/${ username }/repos?sort=updated&per_page=100&direction=desc`);
    } catch (error) {
      throw await error.json() ?? Error(`Error fetching ${ endpoint }`);
    }
  },

  async fetchRecentRepos({ commit, dispatch }, { username } = {}) {
    const res = await dispatch('apiList', { username });

    return res;
  },

  async fetchRepoDetails({ commit, dispatch }, { username, repo } = {}) {
    const res = await dispatch('apiList', {
      username, endpoint: 'repo', repo
    });

    return res;
  },

  async fetchBranches({ commit, dispatch }, { repo, username }) {
    const res = await dispatch('apiList', {
      username, endpoint: 'branches', repo
    });

    return res;
  },

  async fetchCommits(ctx, { repo, username, branch }) {
    console.log('🚀 ~ file: github.js ~ line 93 ~ fetchCommits ~ ctx', ctx);
    const { dispatch } = ctx;
    const res = await dispatch('apiList', {
      username, endpoint: 'commits', repo, branch
    });

    const ob = res.map((data) => {
      return classify(ctx, {
        ...data,
        type: 'github-commits'
      });
    });

    return ob;
  },
  async search({ dispatch }, { repo, username, branch }) {
    const res = await dispatch('apiList', {
      username, endpoint: 'search', repo, branch
    });

    return res;
  },
};
