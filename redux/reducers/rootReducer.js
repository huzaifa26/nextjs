import { combineReducers } from "redux";
import aboutReducer from "./about";
import loginReducer from "./login";
import main from "./main";
import profileReducer from "./profile";
import quizReducer from "./quiz";
import {getAllQuizez,storeQuestions} from "./quiz";

const rootReducer = combineReducers({
  main: main,
  about: aboutReducer,
  profile: profileReducer,
  quiz:quizReducer,
  login: loginReducer,
  allQuizez:getAllQuizez,
  setSingleQuestino:storeQuestions
});

export default rootReducer;
