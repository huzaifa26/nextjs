import { TYPES } from "../types";

const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case TYPES.SET_LOGIN:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
