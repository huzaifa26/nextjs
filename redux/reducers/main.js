import * as t from "../types";

const main = (state = {
    title: "Dummy ToDo Title",
}, action) => {
  switch(action.type){
    case t.SET_TITLE:
      return { 
        ...state,
        title: action.payload
      };
    default:
      return {...state};
    }
}

export default main;