import styles from "./QuizzesQuestions.module.css";
import { useDispatch, useSelector } from "react-redux";
// import { updateAllQuizez } from "../../redux/reducers/quiz";
import { updateAllQuizez } from "../../redux/actions/quiz";

import { useState, useRef, useEffect } from "react";

function EditQuizQuestions(props) {
  const dispatch = useDispatch();


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

  // To Get questionType from map functoin
  const addMCQToArray = (questionType, id) => {
    let question = {
      id,
      questionType: questionType,
      mcqQuestion: mcqRef.current.mcqQuestion.value,
      options: [
        mcqRef.current.optionMcq1.value,
        mcqRef.current.optionMcq2.value,
        mcqRef.current.optionMcq3.value,
        mcqRef.current.optionMcq4.value,
      ],
      correctMcq1: mcqRef.current.correctMcq1.checked,
      correctMcq2: mcqRef.current.correctMcq2.checked,
      correctMcq3: mcqRef.current.correctMcq3.checked,
      correctMcq4: mcqRef.current.correctMcq4.checked,
    };
    props.question.questions.forEach((ques, index) => {
      if (ques.id === question.id) {
        props.question.questions[index] = question;
      }
    });
          dispatch(updateAllQuizez(props.question));;
  };

  const getTrueFalseToArray = (questionType, id) => {
    let answer = false;
    if (tfRef.current.trueCheckbox.checked) {
      answer = true;
    } else if(tfRef.current.falseCheckbox.checked){
        answer = false;
    }

    console.log(answer);

    let question = {
      id,
      questionType: questionType,
      question: tfRef.current.question.value,
      answer,
    };
    props.question.questions.forEach((ques, index) => {
      if (ques.id === question.id) {
        props.question.questions[index] = question;
      }
    });
          dispatch(updateAllQuizez(props.question));;
  };

  const getFitbToArray = (questionType, id) => {
    let question = {
      id,
      questionType,
      question: fitbRef.current.question.value,
      answer: fitbRef.current.fitbAnswer.value,
    };
    props.question.questions.forEach((ques,index)=>{
        if (ques.id === question.id){
            props.question.questions[index]=question;
        }
    })
          dispatch(updateAllQuizez(props.question));;
  };

  const getMAToArray = (questionType,id) => {
    let question = {
        id,
      questionType: questionType,
      question: maRef.current.question.value,
      optionMcq1: maRef.current.optionMcq1.value,
      optionMcq2: maRef.current.optionMcq2.value,
      optionMcq3: maRef.current.optionMcq3.value,
      optionMcq4: maRef.current.optionMcq4.value,
      correctMcq1: maRef.current.correctMcq1.checked,
      correctMcq2: maRef.current.correctMcq2.checked,
      correctMcq3: maRef.current.correctMcq3.checked,
      correctMcq4: maRef.current.correctMcq4.checked,
    };
    props.question.questions.forEach((ques,index)=>{
        if (ques.id === question.id){
            props.question.questions[index]=question;
        }
    })
          dispatch(updateAllQuizez(props.question));;
  };

  const getNAToArray = (questionType,id) => {
    let question = {
        id,
      questionType: questionType,
      question: naRef.current.question.value,
      naType: naRef.current.naType.value,
      answer: naRef.current.anwer.value,
    };
    props.question.questions.forEach((ques,index)=>{
        if (ques.id === question.id){
            props.question.questions[index]=question;
        }
    })
          dispatch(updateAllQuizez(props.question));;
  };

  const [questionType, setQuestionType] = useState();
  const getSAToArray = (questionType,id) => {
    let question = {
        id,
      questionType: questionType,
      question: saRef.current.question.value,
      answer: saRef.current.answer.value,
    };
    props.question.questions.forEach((ques,index)=>{
        if (ques.id === question.id){
            props.question.questions[index]=question;
        }
    })
          dispatch(updateAllQuizez(props.question));;
  };

  const getLAToArray = (questionType,id) => {
    let question = {
      questionType: questionType,
      question: laRef.current.question.value,
      answer: laRef.current.answer.value,
    };
    props.question.questions.forEach((ques,index)=>{
        if (ques.id === question.id){
            props.question.questions[index]=question;
        }
    })
          dispatch(updateAllQuizez(props.question));;
  };

  console.log(props)

  return (
    <div style={style1} className={styles.QuizzesQuestion}>
      {props.question.questions.map((question) => {
        return (
          <>
            {question.questionType === "Multiple Choice Questions" && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addMCQToArray(question.questionType, question.id);
                }}
                ref={mcqRef}
                className={styles.ma}
              >
                <h2>{question.questionType}</h2>
                <input
                  style={{ backgroundImage: "url(./maIcon2.png)" }}
                  placeholder="Enter Quiz Question"
                  name="question"
                  defaultValue={question.question}
                ></input>
                <div>
                  <input
                    name="optionMcq1"
                    style={{ backgroundImage: "url(./maIcon1.png)" }}
                    placeholder="Enter Quiz answer"
                    defaultValue={question.options[0]}
                  ></input>
                  <label>
                    {" "}
                    <input
                      name="correctMcq1"
                      value={"correct"}
                      type={"checkbox"}
                      placeholder="Right Answer"
                      defaultChecked={question.correctMcq1}
                    ></input>
                    Correct Answer
                  </label>
                </div>
                <div>
                  <input
                    name="optionMcq2"
                    style={{ backgroundImage: "url(./maIcon1.png)" }}
                    placeholder="Enter Quiz answer"
                    defaultValue={question.options[1]}
                  ></input>
                  <label>
                    {" "}
                    <input
                      name="correctMcq2"
                      value={"correct"}
                      type={"checkbox"}
                      placeholder="Right Answer"
                      defaultChecked={question.correctMcq2}
                    ></input>
                    Correct Answer
                  </label>
                </div>
                <div>
                  <input
                    name="optionMcq3"
                    style={{ backgroundImage: "url(./maIcon1.png)" }}
                    placeholder="Enter Quiz answer"
                    defaultValue={question.options[2]}
                  ></input>
                  <label>
                    {" "}
                    <input
                      name="correctMcq3"
                      value={"correct"}
                      type={"checkbox"}
                      placeholder="Right Answer"
                      defaultChecked={question.correctMcq3}
                    ></input>
                    Correct Answer
                  </label>
                </div>
                <div>
                  <input
                    name="optionMcq4"
                    style={{ backgroundImage: "url(./maIcon1.png)" }}
                    placeholder="Enter Quiz answer"
                    defaultValue={question.options[3]}
                  ></input>
                  <label>
                    {" "}
                    <input
                      name="correctMcq4"
                      value={"correct"}
                      type={"checkbox"}
                      placeholder="Right Answer"
                      defaultChecked={question.correctMcq4}
                    ></input>
                    Correct Answer
                  </label>
                </div>
                <button type="submit" className={styles.btn}>
                  Update
                </button>
              </form>
            )}

            {question.questionType === "True / False" && (
              <form
                ref={tfRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  getTrueFalseToArray(question.questionType, question.id);
                }}
                className={styles.ma}
              >
                <h2>{question.questionType}</h2>
                <input
                  style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                  placeholder="Enter Quiz Question"
                  name="question"
                  defaultValue={question.question}
                ></input>
                <div>
                  <input
                    style={{ backgroundImage: "url(./maIcon1.png)" }}
                    value={"True"}
                    name="true"
                  ></input>
                  <label>
                    {" "}
                    <input
                      type={"checkbox"}
                      placeholder="Right Answer"
                      name="trueCheckbox"
                      defaultChecked={question.answer === true?true:false}
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
                      defaultChecked={question.answer === false?true:false}
                      name="falseCheckbox"
                    ></input>
                    Correct Answer
                  </label>
                </div>
                <button type="submit" className={styles.btn}>
                  Update
                </button>
              </form>
            )}

            {question.questionType === "Fill-in-the-Blanks" && (
              <form
                ref={fitbRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  getFitbToArray(question.questionType, question.id);
                }}
                className={styles.mcq}
              >
                <h2>{question.questionType}</h2>
                <input
                  style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                  placeholder="Enter Quiz Question"
                  name="question"
                  defaultValue={question.question}
                ></input>
                <input
                  style={{ backgroundImage: "url(./mcqSelect.png)" }}
                  placeholder="Right Answer"
                  name="answer"
                  defaultValue={question.answer}
                ></input>
                <button type="submit" className={styles.btn}>
                  Update
                </button>
              </form>
            )}

            {question.questionType === "Numerical Answer" && (
              <form
                ref={naRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  getNAToArray(question.questionType, question.id);
                }}
                className={styles.mcq}
              >
                <h2>{question.questionType}</h2>
                <input
                  style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                  placeholder="Enter Quiz Question"
                  name="question"
                  defaultValue={question.question}
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
                  name="answer"
                  defaultValue={question.answer}
                ></input>
                <button type="submit" className={styles.btn}>
                  Update
                </button>
              </form>
            )}

            {question.questionType === "Short Answer" && (
              <form
                ref={saRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  getSAToArray(question.questionType, question.id);
                }}
                className={styles.mcq}
              >
                <h2>{question.questionType}</h2>
                <input
                  style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                  name="question"
                  placeholder="Enter Quiz Question"
                  defaultValue={question.question}
                ></input>
                <input
                  style={{ backgroundImage: "url(./mcqSelect.png)" }}
                  placeholder="Right Answer"
                  name="answer"
                  defaultValue={question.answer}
                ></input>
                <button type="submit" className={styles.btn}>
                  Update
                </button>
              </form>
            )}

            {question.questionType === "Long Answer" && (
              <form
                ref={laRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  getLAToArray(question.questionType, question.id);
                }}
                className={styles.mcq}
              >
                <h2>{question.questionType}</h2>
                <input
                  style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
                  placeholder="Enter Quiz Question"
                  name="question"
                  defaultValue={question.question}
                ></input>
                <input
                  style={{ backgroundImage: "url(./mcqSelect.png)" }}
                  placeholder="Right Answer"
                  name="answer"
                  defaultValue={question.answer}
                ></input>
                <button type="submit" className={styles.btn}>
                  Update
                </button>
              </form>
            )}

            {question.questionType === "Multiple Answers" && (
              <form
                ref={maRef}
                onSubmit={(e) => {
                  e.preventDefault();
                  getMAToArray(question.questionType, question.id);
                }}
                className={styles.ma}
              >
                <h2>{question.questionType}</h2>
                <input
                  style={{ backgroundImage: "url(./maIcon2.png)" }}
                  placeholder="Enter Quiz Question"
                  name="question"
                  defaultValue={question.question}
                ></input>

                <div>
                  <input
                    name="optionMcq1"
                    style={{ backgroundImage: "url(./maIcon1.png)" }}
                    placeholder="Enter Quiz answer"
                    defaultValue={question.options[0]}
                  ></input>
                  <label>
                    {" "}
                    <input
                      name="correctMcq1"
                      value={"correct"}
                      type={"checkbox"}
                      placeholder="Right Answer"
                      defaultChecked={question.correctMcq1}
                    ></input>
                    Correct Answer
                  </label>
                </div>
                <div>
                  <input
                    name="optionMcq2"
                    style={{ backgroundImage: "url(./maIcon1.png)" }}
                    placeholder="Enter Quiz answer"
                    defaultValue={question.options[1]}
                  ></input>
                  <label>
                    {" "}
                    <input
                      name="correctMcq2"
                      value={"correct"}
                      type={"checkbox"}
                      placeholder="Right Answer"
                      defaultChecked={question.correctMcq2}
                    ></input>
                    Correct Answer
                  </label>
                </div>
                <div>
                  <input
                    name="optionMcq3"
                    style={{ backgroundImage: "url(./maIcon1.png)" }}
                    placeholder="Enter Quiz answer"
                    defaultValue={question.options[2]}
                  ></input>
                  <label>
                    {" "}
                    <input
                      name="correctMcq3"
                      value={"correct"}
                      type={"checkbox"}
                      placeholder="Right Answer"
                      defaultChecked={question.correctMcq3}
                    ></input>
                    Correct Answer
                  </label>
                </div>
                <div>
                  <input
                    name="optionMcq4"
                    style={{ backgroundImage: "url(./maIcon1.png)" }}
                    placeholder="Enter Quiz answer"
                    defaultValue={question.options[3]}
                  ></input>
                  <label>
                    {" "}
                    <input
                      name="correctMcq4"
                      value={"correct"}
                      type={"checkbox"}
                      placeholder="Right Answer"
                      defaultChecked={question.correctMcq4}
                    ></input>
                    Correct Answer
                  </label>
                </div>
                <button type="submit" className={styles.btn}>
                  Update
                </button>
              </form>
            )}
          </>
        );
      })}
    </div>
  );
}

export default EditQuizQuestions;
