import { TYPES } from "../types";

const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_PROFILE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
