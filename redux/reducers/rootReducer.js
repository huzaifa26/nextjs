import { combineReducers } from "redux";
import aboutReducer from "./about";
import loginReducer from "./login";
import main from "./main";
import profileReducer from "./profile";

const rootReducer = combineReducers({
  main: main,
  about: aboutReducer,
  profile: profileReducer,
  login: loginReducer,
});

export default rootReducer;
