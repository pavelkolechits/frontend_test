import { ACTIONS } from "../constants";

const defState = {
  articles: [],
};

export function postListReducer(state = defState, action) {
  switch (action.type) {
    case ACTIONS.GET_NEWS_REQUEST_SUCCESS: {
      function getID() {
        return "_" + Math.random().toString(36).substr(2, 9);
      }

      action.request.articles.forEach((i) => (i.source.id = getID()));

      return { ...state, articles: action.request.articles };
    }
    default:
      return { ...state };
  }
}
