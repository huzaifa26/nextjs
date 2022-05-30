import TextArea from "antd/lib/input/TextArea";
import { data } from "jquery";
import { useEffect, useState } from "react";
import styles from "./Questions.module.css";

function Questions({ quiz, closeQuestionModal }) {
  const [counter, setCounter] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [submitQuiz,setSubmitQuiz]=useState(false);
  const [userAnsweredQuestion,setUserAnsweredQuestions]=useState([]);

  const closeQuestionModalHandler = () => {
    closeQuestionModal();
  };

  const nextQuestionHandler = () => {
    if(counter===quiz.questions.length-1){
      setSubmitQuiz(true);
      if(quiz.questions[counter].hasOwnProperty("userAnswer") === false){
        quiz.questions[counter].userAnswer = userAnswer;
        setUserAnsweredQuestions((prevState)=>{
          return [...prevState,quiz.questions[counter]]
        })
      }
      return
    }
    if (userAnswer !== null) {
      quiz.questions[counter].userAnswer = userAnswer;
      setUserAnsweredQuestions((prevState)=>{
        return [...prevState,quiz.questions[counter]]
      })
      setUserAnswer(null);
    }
    if (counter >= quiz.questions.length - 1) {
      return;
    }
    setCounter(counter + 1);
  };

  const prevQuestionHandler = () => {

    if(submitQuiz && !quiz.questions[counter].hasOwnProperty("userAnswer")){
      setSubmitQuiz(false);
      return
    }

    if (counter <= 0) {
      return;
    }

    if (quiz.questions[counter - 1].hasOwnProperty("userAnswer") === false) {
      setCounter(counter - 1);
    }
  };

  const onSubmitBtnHandler=()=>{
    if(submitQuiz){
      console.log(userAnsweredQuestion);
      closeQuestionModalHandler();
    }
  }

  return (
    <div className={styles.Questions}>
      <img
        alt=""
        onClick={closeQuestionModalHandler}
        className={styles.crossImage}
        src={"./crossIcon.png"}
      />
      <div className={styles.headingDiv}>
        <img alt="" src={"./quizInstructionsIcon.png"} />
        <h1>
          {counter + 1} Of {quiz.questions.length || ""} Questions
        </h1>
      </div>

      

      {submitQuiz === false ? 
      <>
        <div className={styles.questionArea}>
          <div>
            <img alt="" src="./mcqQuestionMark.png" />
            <h2>{quiz.questions[counter].question}</h2>
          </div>

          {quiz.questions[counter].questionType === "Multiple Choice Questions" &&
            quiz.questions[counter].option.map((op, index) => {
              return (
                <div>
                  {" "}
                  <h2>{index + 1}</h2> <h2>{op}</h2>{" "}
                </div>
              );
            })}

          {quiz.questions[counter].questionType === "True / False" && (
            <>
              <div>
                {" "}
                <h2>{1}</h2> <h2>{"True"}</h2>{" "}
              </div>
              <div>
                {" "}
                <h2>{2}</h2> <h2>{"False"}</h2>{" "}
              </div>
            </>
          )}

          {/* {quiz.questions[counter].questionType === "Fill-in-the-Blanks" && 
              <>
                  <div> <h2>{1}</h2> <h2>{"True"}</h2> </div>
                  <div> <h2>{2}</h2> <h2>{"False"}</h2> </div>
              </>
          } */}

          {quiz.questions[counter].questionType === "Multiple Answers" &&
            quiz.questions[counter].option.map((op, index) => {
              return (
                <div>
                  {" "}
                  <h2>{index + 1}</h2> <h2>{op}</h2>{" "}
                </div>
              );
            })}

          {quiz.questions[counter].questionType === "Numerical Answer" && (
            <>
              <input
                placeholder="Type your Answer here"
                className={styles.input}
                type={"text"}
                onChange={(e)=>{
                  setUserAnswer(e.target.value);
                }}
              ></input>
            </>
          )}

          {quiz.questions[counter].questionType === "Short Answer" && (
            <>
              <textarea
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                }}
                className={styles.textarea}
                placeholder="Type Your Answer Here"
              ></textarea>
            </>
          )}

          {quiz.questions[counter].questionType === "Long Answer" && (
            <>
              <textarea
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                }}
                className={styles.textarea}
                placeholder="Type Your Answer Here"
              ></textarea>
            </>
          )}
        </div>

        <div className={styles.correctOptionDiv}>
          <div className={styles.correctOption}>
            <h2>Select Correct Answer</h2>
            <div className={styles.options}>
              {quiz.questions[counter].questionType ===
                "Multiple Choice Questions" &&
                quiz.questions[counter].option.map((op, index) => {
                  return (
                    <label>
                      {index + 1}{" "}
                      <input
                        onClick={(e) => {
                          if (e.target.checked) {
                            setUserAnswer(e.target.value);
                            return;
                          }
                          setUserAnswer(null);
                        }}
                        value={op}
                        type={"checkbox"}
                      ></input>
                    </label>
                  );
                })}

              {quiz.questions[counter].questionType === "True / False" && (
                <>
                  <label>
                    {"True"}{" "}
                    <input
                      value={true}
                      onClick={(e) => {
                        if (e.target.checked) {
                          setUserAnswer(e.target.value);
                          return;
                        }
                        setUserAnswer(null);
                      }}
                      type={"checkbox"}
                    ></input>
                  </label>
                  <label>
                    {"False"}{" "}
                    <input
                      value={false}
                      onClick={(e) => {
                        if (e.target.checked) {
                          setUserAnswer(e.target.value);
                          return;
                        }
                        setUserAnswer(null);
                      }}
                      type={"checkbox"}
                    ></input>
                  </label>
                </>
              )}

              {quiz.questions[counter].questionType === "Fill-in-the-Blanks" && (
                <>
                  <label>
                    {"Blank"}{" "}
                    <input
                      onChange={(e) => {
                        setUserAnswer(e.target.value);
                      }}
                      style={{
                        fontSize: "16px",
                        width: "110px",
                        height: "130%",
                        outline: "none",
                      }}
                      type={"text"}
                    ></input>
                  </label>
                </>
              )}

              {quiz.questions[counter].questionType === "Multiple Answers" &&
                quiz.questions[counter].option.map((op, index) => {
                  return (
                    <label>
                      {index + 1}{" "}
                      <input
                        onClick={(e) => {
                          if (e.target.checked) {
                            setUserAnswer((prevState) => {
                              if (prevState === null) {
                                return e.target.value;
                              }
                              return [...prevState, e.target.value];
                            });
                            return;
                          }
                          if (
                            e.target.checked === false &&
                            userAnswer.length > 0
                          ) {
                            let index = userAnswer.indexOf(e.target.value);
                            let list = [...userAnswer];
                            list.splice(index, 1);
                            if (list.length === 0) {
                              setUserAnswer(null);
                              return;
                            }
                            setUserAnswer(list);
                            return;
                          }
                        }}
                        value={op}
                        type={"checkbox"}
                      ></input>
                    </label>
                  );
                })}
            </div>
          </div>
          <p className={styles.p}>
            Select all or possible options from the given ones
          </p>
        </div>
      </>
      :
      <h2>Please make sure you have attemped all then Question and the submit the Quiz.</h2>
      }

      <div className={styles.buttondiv}>
        <button onClick={prevQuestionHandler}>Back</button>
        <button>Skip</button>
        <button onClick={onSubmitBtnHandler}>Submit</button>
        <button onClick={nextQuestionHandler}>Next</button>
      </div>
    </div>
  );
}

export default Questions;