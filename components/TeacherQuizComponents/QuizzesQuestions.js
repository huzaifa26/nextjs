import styles from "./QuizzesQuestions.module.css";

import { useState, useRef, useEffect } from "react";

function QuizzesQuestions(props) {
//   const questionType = useRef();
//   let [questionNo, setquestionNo] = useState();

//   useEffect(() => {
//     setquestionNo(props.id || "");
//   }, [props.id]);

//   const [mcq, setmcq] = useState(false);
//   const [tf, settf] = useState(false);
//   const [fitb, setfitb] = useState(false);
//   const [ma, setma] = useState(false);
//   const [na, setna] = useState(false);
//   const [sa, setsa] = useState(false);
//   const [la, setla] = useState(false);

//   const setAllFalse = () => {
//     setmcq(false);
//     settf(false);
//     setfitb(false);
//     setma(false);
//     setna(false);
//     setsa(false);
//     setla(false);
//   };

//   const selectQuestionHandler = () => {
//     setAllFalse();
//     switch (questionType.current.value) {
//       case "Multiple Choice Questions":
//         setmcq(true);
//         break;

//       case "True / False":
//         settf(true);
//         break;

//       case "Fill-in-the-Blanks":
//         setfitb(true);
//         break;

//       case "Multiple Answers":
//         setma(true);
//         break;

//       case "Numerical Answer":
//         setna(true);
//         break;

//       case "Short Answer":
//         setsa(true);
//         break;

//       case "Long Answer":
//         setla(true);
//         break;
//     }
//   };

  let style1 = null;
//   if (mcq || tf || fitb || ma || na || sa || la) {
//     style1 = {
//       minHeight: "500px",
//       marginBottom: "120px",
//     };
//   }

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

  const addMCQToArray = (e) => {
    e.preventDefault();
    let question = {
      questionType: questionType.current.value,
      question: mcqRef.current.mcqQuestion.value,
      options:[
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
    props.getQuestionsintoArray(question);
  };

  const getTrueFalseToArray = (e) => {
    e.preventDefault();
    let answer = false;
    if (tfRef.current.trueCheckbox.checked) {
      answer = true;
    }

    let question = {
      questionType: questionType.current.value,
      question: tfRef.current.tfquestion.value,
      answer,
    };
    props.getQuestionsintoArray(question);
  };

  const getFitbToArray = (e) => {
    e.preventDefault();

    let question = {
      questionType: questionType.current.value,
      question: fitbRef.current.fitbQuestion.value,
      answer: fitbRef.current.fitbAnswer.value,
    };
    props.getQuestionsintoArray(question);
  };

  const getMAToArray = (e) => {
    e.preventDefault();
    
    let question = {
      questionType: questionType.current.value,
      question: maRef.current.mcqQuestion.value,
      options:[
        maRef.current.optionMcq1.value,
        maRef.current.optionMcq2.value,
        maRef.current.optionMcq3.value,
        maRef.current.optionMcq4.value,
      ],
      correctMcq1: maRef.current.correctMcq1.checked,
      correctMcq2: maRef.current.correctMcq2.checked,
      correctMcq3: maRef.current.correctMcq3.checked,
      correctMcq4: maRef.current.correctMcq4.checked,
    };
    props.getQuestionsintoArray(question);
  };

  const getNAToArray = (e) => {
    e.preventDefault();
    let question = {
      questionType: questionType.current.value,
      naQuestion: naRef.current.naQuestion.value,
      naType: naRef.current.naType.value,
      answer: naRef.current.naAsnwer.value,
    };
    props.getQuestionsintoArray(question);
  };

  const getSAToArray = (e) => {
    e.preventDefault();
    let question = {
      questionType: questionType.current.value,
      question: saRef.current.saQuestion.value,
      answer: saRef.current.saAnswer.value,
    };
  };

  const getLAToArray = (e) => {
    e.preventDefault();
    let question = {
      questionType: questionType.current.value,
      question: laRef.current.laQuestion.value,
      answer: laRef.current.laAnswer.value,
    };
    props.getQuestionsintoArray(question);
  };


  return (
    <div style={style1} className={styles.QuizzesQuestion}>
    {props.question.questions.map((question)=>{
        return(
            <>
            {question.questionType === "Multiple Choice Questions" && (
                <div onSubmit={addMCQToArray} ref={mcqRef} className={styles.ma}>
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
                        checked={question.correctMcq1}
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
                        checked={question.correctMcq2}
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
                        checked={question.correctMcq3}
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
                        checked={question.correctMcq4}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                </div>
              )}
        
              {question.questionType === "True / False" && (
                <div ref={tfRef} onSubmit={getTrueFalseToArray} className={styles.ma}>
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
                        checked={question.answer === true?true:false}
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

                </div>
              )}
        
              {question.questionType === "Fill-in-the-Blanks" && (
                <div ref={fitbRef} onSubmit={getFitbToArray} className={styles.mcq}>
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

                </div>
              )}
        
              {question.questionType === "Numerical Answer" && (
                <div ref={naRef} onSubmit={getNAToArray} className={styles.mcq}>
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

                </div>
              )}
        
              {question.questionType === "Short Answer" && (
                <div ref={saRef} onSubmit={getSAToArray} className={styles.mcq}>
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

                </div>
              )}
        
              {question.questionType === "Long Answer" && (
                <div ref={laRef} onSubmit={getLAToArray} className={styles.mcq}>
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

                </div>
              )}
        
              {question.questionType === "Multiple Answers" && (
                <div ref={maRef} onSubmit={getMAToArray} className={styles.ma}>
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
                        checked={question.correctMcq1}
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
                        checked={question.correctMcq2}
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
                        checked={question.correctMcq3}
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
                        checked={question.correctMcq4}
                      ></input>
                      Correct Answer
                    </label>
                  </div>
                </div>
              )}
              </>
        )
    })}
      
    </div>
  );
}

export default QuizzesQuestions;
