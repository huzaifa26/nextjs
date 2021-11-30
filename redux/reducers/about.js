import { TYPES } from "../types";

const aboutReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_ABOUT:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default aboutReducer;
