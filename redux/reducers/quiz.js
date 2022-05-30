import { TYPES } from "../types";

const quizReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.SET_QUIZ:
      return [
        ...state,{...action.payload,}
        ];
    default:
      return state;
  }
};

export const getAllQuizez=(state=[],action)=>{
  switch(action.type){
    case TYPES.SET_ALLQUIZEZ:
      return[
      ...state,{...action.payload,}
      ];

    default:
      return [...state]
  }
}

// Quiz list handler
export const storeQuestions=(state=[],action)=>{
  let firstItem=state[0]
  if (state.length>0 && firstItem.key === 0){
    return [...state]
  }

  switch(action.type){
    case TYPES.SET_SINGLEQUESTION:
      return[
        ...state,{...action.payload,}
    ];

    case TYPES.SET_ALLQUIZEZ_NEW_STATE:
      return[
      ...action.payload
      ];

    case TYPES.SET_SINGLEQUESTION_EMPTY:
      return []

    default:
      return [...state]
  }
}

export default quizReducer;