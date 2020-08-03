export const GET_REPOS = 'StarBase/repos/LOAD';
export const GET_REPOS_SUCCESS = 'StarBase/repos/LOAD_SUCCESS';
export const GET_REPOS_FAIL = 'StarBase/repos/LOAD_FAIL';

export const GET_REPO_INFO = 'StarBase/repos/INFO';
export const GET_REPO_INFO_SUCCESS = 'StarBase/repos/INFO_SUCCESS';
export const GET_REPO_INFO_FAIL = 'StarBase/repos/INFO_FAIL';

export const GET_USER = 'StarBase/repos/USER';
export const GET_USER_SUCCESS = 'StarBase/repos/USER_SUCCESS';
export const GET_USER_FAIL = 'StarBase/repos/USER_FAIL';

const initialState = {repos: [], repoInfo: {}, user: {}};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_REPOS:
      return {...state, loading: true};
    case GET_REPOS_SUCCESS:
      return {...state, loading: false, repos: action.payload.data};
    case GET_REPOS_FAIL:
      return {...state, loading: false, error: 'Error getting repos info'};
    case GET_REPO_INFO:
      return {...state, loadingInfo: true};
    case GET_REPO_INFO_SUCCESS:
      return {...state, loadingInfo: false, repoInfo: action.payload.data};
    case GET_REPO_INFO_FAIL:
      console.log(action.payload);
      return {
        ...state,
        loadingInfo: false,
        errorInfo: 'Error getting repo info',
      };
    case GET_USER:
      return {...state, loadingProfile: true};
    case GET_USER_SUCCESS:
      return {...state, loadingProfile: false, user: action.payload.data};
    case GET_USER_FAIL:
      return {
        ...state,
        loadingProfile: false,
        errorUser: 'Error getting user info',
      };
    default:
      return state;
  }
}

export function listRepos(user) {
  return {
    type: GET_REPOS,
    payload: {
      request: {
        url: `/users/${user}/repos`,
      },
    },
  };
}

export function getRepoDetail(user, repo) {
  return {
    type: GET_REPO_INFO,
    payload: {
      request: {
        url: `/repos/${user}/${repo}`,
      },
    },
  };
}

export function getUser(user) {
  return {
    type: GET_USER,
    payload: {
      request: {
        url: `/users/${user}`,
      },
    },
  };
}
