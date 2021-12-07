import { ACTIONS } from "../constants";

const defState = {
  articles: [],
};

export function postListReducer(state = defState, action) {
  switch (action.type) {
    case ACTIONS.GET_NEWS_REQUEST_SUCCESS: {
      return { ...state, articles: action.request };
    }
    default:
      return { ...state };
  }
}
