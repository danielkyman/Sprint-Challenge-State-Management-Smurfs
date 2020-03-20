import {
  FETCH_DATA,
  POST_DATA,
  UPDATE_DATA,
  SET_ERROR
} from "../actions/smirfAction";

const initialState = {
  smurfs: [],
  isFetchingData: false,
  isPostingData: false,
  error: ""
};

export const smirfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true
      };
    case UPDATE_DATA:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingData: false,
        isPostingData: false
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        isPostingData: false,
        error: action.payload
      };
    case POST_DATA:
      return {
        ...state,
        isPostingData: true
      };
    default:
      return state;
  }
};
