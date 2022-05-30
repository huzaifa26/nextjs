import styles from "./QuizzesQuestions.module.css";

import { useState, useRef, useEffect } from "react";
import { display } from "@mui/system";
import { getNativeSelectUtilityClasses } from "@mui/material";

function StudentUnGradedQuestion(props) {


  let style1 = null;

  const removeDivHandler = (id) => {
    props.removeDiv(id);
  };

  const mcqRef = useRef();
  const tfRef = useRef();
  const fitbRef = useRef();
  const maRef = useRef();
  const naRef = useRef();
  const saRef = useRef();
  const laRef = useRef();

  const addMCQToArray = (id,mark) => {
    const answeredQuestion=props.studentQuiz.quiz.filter((element)=>element.id === id);
    answeredQuestion=answeredQuestion[0];

    let question = {
      mark,
      questionType: answeredQuestion.questionType,
      question: answeredQuestion.question,
      options:answeredQuestion.options,
      answer:answeredQuestion.answer,
      userAnswer:answeredQuestion.userAnswer,
      mark:mark
    };
    console.log(question);
  };

  const getTrueFalseToArray = (id,mark) => {
    const answeredQuestion=props.studentQuiz.quiz.filter((element)=>element.id === id);
    answeredQuestion=answeredQuestion[0];


    let question = {
        questionType: answeredQuestion.questionType,
        question: answeredQuestion.question,
        answer:answeredQuestion.answer,
        userAnswer:answeredQuestion.userAnswer,
        mark,
    };
    console.log(question);
  };

  const getFitbToArray = (id,mark) => {
    const answeredQuestion=props.studentQuiz.quiz.filter((element)=>element.id === id);
    answeredQuestion=answeredQuestion[0];

    let question = {
        questionType: answeredQuestion.questionType,
        question: answeredQuestion.question,
        answer:answeredQuestion.answer,
        userAnswer:answeredQuestion.userAnswer,
        mark,
    };
    console.log(question);
  };

  const getMAToArray = (id,mark) => {
    const answeredQuestion=props.studentQuiz.quiz.filter((element)=>element.id === id);
    answeredQuestion=answeredQuestion[0];

    let question = {
        mark,
        questionType: answeredQuestion.questionType,
        question: answeredQuestion.question,
        options:answeredQuestion.options,
        answer:answeredQuestion.answer,
        userAnswer:answeredQuestion.userAnswer,
        mark:mark
      };
    console.log(question);
  };

  const getNAToArray = (id,mark) => {
    const answeredQuestion=props.studentQuiz.quiz.filter((element)=>element.id === id);
    answeredQuestion=answeredQuestion[0];

    let question = {
        questionType: answeredQuestion.questionType,
        question: answeredQuestion.question,
        answer:answeredQuestion.answer,
        naType: answeredQuestion.naType,
        userAnswer:answeredQuestion.userAnswer,
        mark:mark
    };
    console.log(question);
  };

  const getSAToArray = (id,mark) => {
    const answeredQuestion=props.studentQuiz.quiz.filter((element)=>element.id === id);
    answeredQuestion=answeredQuestion[0];

    let question = {
        questionType: answeredQuestion.questionType,
        question: answeredQuestion.question,
        answer:answeredQuestion.answer,
        userAnswer:answeredQuestion.userAnswer,
        mark:mark
    };
    console.log(question);
  };

  const getLAToArray = (id,mark) => {
    const answeredQuestion=props.studentQuiz.quiz.filter((element)=>element.id === id);
    answeredQuestion=answeredQuestion[0];

    let question = {
        questionType: answeredQuestion.questionType,
        question: answeredQuestion.question,
        answer:answeredQuestion.answer,
        userAnswer:answeredQuestion.userAnswer,
        mark:mark
    };
    console.log(question);
  };

  console.log(props.studentQuiz.quiz);

  return (
    <div style={style1} className={styles.QuizzesQuestion}>
    {props.studentQuiz.quiz.map((question)=>{
        return(
            <>
            {question.questionType === "Multiple Choice Questions" && (
                <div ref={mcqRef} className={styles.ma}>
                    <h2>{question.questionType}</h2>
                  <input
                    style={{ backgroundImage: "url(./maIcon2.png)" }}
                    placeholder="Enter Quiz Question"
                    name="mcqQuestion"
                    value={question.question}
                  ></input>
                  <div>
                    <input
                      name="optionMcq1"
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      placeholder="Enter Quiz Asnwer"
                      value={question.options[0]}
                    ></input>
                    <label>
                      {" "}
                      <input
                        name="correctMcq1"
                        value={"correct"}
                        type={"checkbox"}
                        placeholder="Right Answer"
                        checked={question.userAnswer === question.options[0] && true}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div>
                    <input
                      name="optionMcq2"
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      placeholder="Enter Quiz Asnwer"
                      value={question.options[1]}
                    ></input>
                    <label>
                      {" "}
                      <input
                        name="correctMcq2"
                        value={"correct"}
                        type={"checkbox"}
                        placeholder="Right Answer"
                        checked={question.userAnswer === question.options[1] && true}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div>
                    <input
                      name="optionMcq3"
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      placeholder="Enter Quiz Asnwer"
                      value={question.options[2]}
                    ></input>
                    <label>
                      {" "}
                      <input
                        name="correctMcq3"
                        value={"correct"}
                        type={"checkbox"}
                        placeholder="Right Answer"
                        checked={question.userAnswer === question.options[2] && true}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div>
                    <input
                      name="optionMcq4"
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      placeholder="Enter Quiz Asnwer"
                      value={question.options[3]}
                    ></input>
                    <label>
                      {" "}
                      <input
                        name="correctMcq4"
                        value={"correct"}
                        type={"checkbox"}
                        placeholder="Right Answer"
                        checked={question.userAnswer === question.options[3] && true}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div className={styles.gradingDiv}>
                      <div>
                          <label>Correct</label>
                          <input  value={true} onClick={(e)=>{addMCQToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                      <div>
                          <label>Incorrect</label>
                          <input  value={false} onClick={(e)=>{addMCQToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                  </div>
                </div>
              )}
        
              {question.questionType === "True / False" && (
                <div ref={tfRef} className={styles.ma}>
                    <h2>{question.questionType}</h2>
                  <input
                    style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                    placeholder="Enter Quiz Question"
                    name="tfquestion"
                    value={question.question}
                  ></input>
                  <div>
                    <input
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      value="True"
                      name="true"
                    ></input>
                    <label>
                      {" "}
                      <input
                        type={"checkbox"}
                        placeholder="Right Answer"
                        name="trueCheckbox"
                        checked={question.userAnswer === question.answer && true}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div>
                    <input
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      value="False"
                      name="false"
                    ></input>
                    <label>
                      {" "}
                      <input
                        type={"checkbox"}
                        placeholder="Right Answer"
                        checked={question.answer === false?true:false}
                        name="falseCheckbox"
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div className={styles.gradingDiv}>
                      <div>
                          <label>Correct</label>
                          <input  value={true} onClick={(e)=>{getTrueFalseToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                      <div>
                          <label>Incorrect</label>
                          <input  value={false} onClick={(e)=>{getTrueFalseToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                  </div>
                </div>
              )}
        
              {question.questionType === "Fill-in-the-Blanks" && (
                <div ref={fitbRef} className={styles.mcq}>
                    <h2>{question.questionType}</h2>
                  <input
                    style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                    placeholder="Enter Quiz Question"
                    name="fitbQuestion"
                    value={question.question}
                  ></input>
                  <input
                    style={{ backgroundImage: "url(./mcqSelect.png)" }}
                    placeholder="Right Answer"
                    name="fitbAnswer"
                    value={question.answer}
                  ></input>
                    <div className={styles.gradingDiv}>
                      <div>
                          <label>Correct</label>
                          <input  value={true} onClick={(e)=>{getFitbToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                      <div>
                          <label>Incorrect</label>
                          <input  value={false} onClick={(e)=>{getFitbToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                  </div>
                </div>
              )}
        
              {question.questionType === "Numerical Answer" && (
                <div ref={naRef} className={styles.mcq}>
                    <h2>{question.questionType}</h2>
                  <input
                    style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                    placeholder="Enter Quiz Question"
                    name="naQuestion"
                    value={question.question}
                  ></input>
                  {/* <select
                    style={{ backgroundImage: "url(./questionTypeIcon.png)" }}
                    placeholder="Select Question Type"
                    type={"text"}
                    name="naType"
                  >
                    <option value="" disabled selected>
                      Select Question Type
                    </option>
                    <option value="Date">Date</option>
                    <option value="Single Digit">Single Digit</option>
                    <option value="Two Digit">Two Digit</option>
                    <option value="Multiple Digit">Multiple Digit</option>
                    <option value="Decimals">Decimals</option>
                  </select> */}
                  <input
                    style={{ backgroundImage: "url(./mcqSelect.png)" }}
                    placeholder="Right Answer"
                    name="naAsnwer"
                    value={question.answer}
                  ></input>
                    <div className={styles.gradingDiv}>
                      <div>
                          <label>Correct</label>
                          <input  value={true} onClick={(e)=>{getNAToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                      <div>
                          <label>Incorrect</label>
                          <input  value={false} onClick={(e)=>{getNAToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                  </div>
                </div>
              )}
        
              {question.questionType === "Short Answer" && (
                <div ref={saRef} className={styles.mcq}>
                    <h2>{question.questionType}</h2>
                  <input
                    style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                    name="saQuestion"
                    placeholder="Enter Quiz Question"
                    value={question.question}
                  ></input>
                  <input
                    style={{ backgroundImage: "url(./mcqSelect.png)" }}
                    placeholder="Right Answer"
                    name="saAnswer"
                    value={question.answer}
                  ></input>
                    <div className={styles.gradingDiv}>
                      <div>
                          <label>Correct</label>
                          <input  value={true} onClick={(e)=>{getSAToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                      <div>
                          <label>Incorrect</label>
                          <input  value={false} onClick={(e)=>{getSAToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                  </div>
                </div>
              )}
        
              {question.questionType === "Long Answer" && (
                <div ref={laRef} className={styles.mcq}>
                    <h2>{question.questionType}</h2>
                  <input
                    style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                    placeholder="Enter Quiz Question"
                    name="laQuestion"
                    value={question.question}
                  ></input>
                  <input
                    style={{ backgroundImage: "url(./mcqSelect.png)" }}
                    placeholder="Right Answer"
                    name="laAnswer"
                    value={question.answer}
                  ></input>
                    <div className={styles.gradingDiv}>
                        <div>
                            <label>Correct</label>
                            <input  value={true} onClick={(e)=>{getLAToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                        </div>
                        <div>
                            <label>Incorrect</label>
                            <input  value={false} onClick={(e)=>{getLAToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                        </div>
                    </div>
                </div>
              )}
        
              {question.questionType === "Multiple Answers" && (
                <div ref={maRef} className={styles.ma}>
                    <h2>{question.questionType}</h2>
                  <input
                    style={{ backgroundImage: "url(./maIcon2.png)" }}
                    placeholder="Enter Quiz Question"
                    name="mcqQuestion"
                    value={question.question}
                  ></input>
        
                  <div>
                    <input
                      name="optionMcq1"
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      placeholder="Enter Quiz Asnwer"
                      value={question.options[0]}
                    ></input>
                    <label>
                      {" "}
                      <input
                        name="correctMcq1"
                        value={"correct"}
                        type={"checkbox"}
                        placeholder="Right Answer"
                        checked={ question.userAnswer.some((e)=>e === question.options[0]) && true}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div>
                    <input
                      name="optionMcq2"
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      placeholder="Enter Quiz Asnwer"
                      value={question.options[1]}

                    ></input>
                    <label>
                      {" "}
                      <input
                        name="correctMcq2"
                        value={"correct"}
                        type={"checkbox"}
                        placeholder="Right Answer"
                        checked={ question.userAnswer.some((e)=>e === question.options[1]) && true}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div>
                    <input
                      name="optionMcq3"
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      placeholder="Enter Quiz Asnwer"
                      value={question.options[2]}
                    ></input>
                    <label>
                      {" "}
                      <input
                        name="correctMcq3"
                        value={"correct"}
                        type={"checkbox"}
                        placeholder="Right Answer"
                        checked={ question.userAnswer.some((e)=>e === question.options[2]) && true}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div>
                    <input
                      name="optionMcq4"
                      style={{ backgroundImage: "url(./maIcon1.png)" }}
                      placeholder="Enter Quiz Asnwer"
                      value={question.options[3]}
                    ></input>
                    <label>
                      {" "}
                      <input
                        name="correctMcq4"
                        value={"correct"}
                        type={"checkbox"}
                        placeholder="Right Answer"
                        checked={ question.userAnswer.some((e)=>e === question.options[3]) && true}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                  <div className={styles.gradingDiv}>
                      <div>
                          <label>Correct</label>
                          <input value={true} onClick={(e)=>{getMAToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                      <div>
                          <label>Incorrect</label>
                          <input value={false} onClick={(e)=>{getMAToArray(question.id,e.target.value)}} name={question.id} type="radio"></input>
                      </div>
                  </div>
                </div>
              )}
              </>
        )
    })}
    </div>
  );
}

export default StudentUnGradedQuestion;
