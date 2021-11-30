import { combineReducers } from "redux";
import aboutReducer from "./about";
import main from "./main";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  main: main,
  about: aboutReducer,
  profile: profileReducer,
});

export default rootReducer;
