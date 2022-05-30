import styles from "../TeacherQuizComponents/CreateQuiz.module.css";
import { useState, useRef, useEffect } from "react";

function Questions(props) {
  const questionType = useRef();
  let [questionNo, setquestionNo] = useState();

  useEffect(() => {
    setquestionNo(props.id || "");
  }, [props.id]);

  const [mcq, setmcq] = useState(false);
  const [tf, settf] = useState(false);
  const [fitb, setfitb] = useState(false);
  const [ma, setma] = useState(false);
  const [na, setna] = useState(false);
  const [sa, setsa] = useState(false);
  const [la, setla] = useState(false);

  const setAllFalse = () => {
    setmcq(false);
    settf(false);
    setfitb(false);
    setma(false);
    setna(false);
    setsa(false);
    setla(false);
  };

  const selectQuestionHandler = () => {
    setAllFalse();
    switch (questionType.current.value) {
      case "Multiple Choice Questions":
        setmcq(true);
        break;

      case "True / False":
        settf(true);
        break;

      case "Fill-in-the-Blanks":
        setfitb(true);
        break;

      case "Multiple Answers":
        setma(true);
        break;

      case "Numerical Answer":
        setna(true);
        break;

      case "Short Answer":
        setsa(true);
        break;

      case "Long Answer":
        setla(true);
        break;
    }
  };

  let style1 = null;
  if (mcq || tf || fitb || ma || na || sa || la) {
    style1 = {
      minHeight: "500px",
      marginBottom: "120px",
    };
  }

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


  const addMCQToArray = (id) => {
    let question = {
      id:id,
      questionType: questionType.current.value,
      question: mcqRef.current.question.value,
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

  const getTrueFalseToArray = (id) => {
    let answer = false;
    if (tfRef.current.trueCheckbox.checked) {
      answer = true;
    }

    let question = {
      id:id,
      questionType: questionType.current.value,
      question: tfRef.current.question.value,
      answer,
    };
    props.getQuestionsintoArray(question);
  };

  const getFitbToArray = (id) => {
    let question = {
      id,
      questionType: questionType.current.value,
      question: fitbRef.current.question.value,
      answer: fitbRef.current.fitbAnswer.value,
    };
    props.getQuestionsintoArray(question);
  };

  const getMAToArray = (id) => {
    let question = {
      id,
      questionType: questionType.current.value,
      question: maRef.current.question.value,
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

  const getNAToArray = (id) => {
    let question = {
      id,
      questionType: questionType.current.value,
      question: naRef.current.question.value,
      naType: naRef.current.naType.value,
      answer: naRef.current.answer.value,
    };
    props.getQuestionsintoArray(question);
  };

  const getSAToArray = (id) => {
    let question = {
      id,
      questionType: questionType.current.value,
      question: saRef.current.question.value,
      answer: saRef.current.answer.value,
    };
    props.getQuestionsintoArray(question);
  };

  const getLAToArray = (id) => {
    let question = {
      id,
      questionType: questionType.current.value,
      question: laRef.current.question.value,
      answer: laRef.current.answer.value,
    };
    props.getQuestionsintoArray(question);
  };


  return (
    <div style={style1} className={styles.QuestionOuterDiv}>
      <div className={styles.QuestionDiv}>
        <select
          onChange={selectQuestionHandler}
          ref={questionType}
          style={{ backgroundImage: "url(./questionTypeIcon.png)" }}
          placeholder="Select Question Type"
          type={"text"}
        >
          <option value="" disabled selected>
            Select Question Type
          </option>
          <option value="Multiple Choice Questions">
            Multiple Choice Questions
          </option>
          <option value="True / False">True / False</option>
          <option value="Fill-in-the-Blanks">Fill-in-the-Blanks</option>
          <option value="Multiple Answers">Multiple Answers</option>
          <option value="Numerical Answer">Numerical Answer</option>
          <option value="Short Answer">Short Answer</option>
          <option value="Long Answer">Long Answer</option>
        </select>
        <h3>
          {questionNo} of {props.Length} Quiz Question : {props.id}
        </h3>
        <button
          id={questionNo}
          onClick={() => {
            removeDivHandler(props.id);
          }}
        >
          -
        </button>
      </div>

      {mcq && (
        <form onSubmit={(e)=>{e.preventDefault();addMCQToArray(props.id)}} ref={mcqRef} className={styles.ma}>
          <input
            style={{ backgroundImage: "url(./maIcon2.png)" }}
            placeholder="Enter Quiz Question"
            name="question"
          ></input>

          <div>
            <input
              name="optionMcq1"
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz answer"
            ></input>
            <label>
              {" "}
              <input
                name="correctMcq1"
                value={"correct"}
                type={"checkbox"}
                placeholder="Right Answer"
              ></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              name="optionMcq2"
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz answer"
            ></input>
            <label>
              {" "}
              <input
                name="correctMcq2"
                value={"correct"}
                type={"checkbox"}
                placeholder="Right Answer"
              ></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              name="optionMcq3"
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz answer"
            ></input>
            <label>
              {" "}
              <input
                name="correctMcq3"
                value={"correct"}
                type={"checkbox"}
                placeholder="Right Answer"
              ></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              name="optionMcq4"
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz answer"
            ></input>
            <label>
              {" "}
              <input
                name="correctMcq4"
                value={"correct"}
                type={"checkbox"}
                placeholder="Right Answer"
              ></input>
              Correct Answer
            </label>
          </div>
          <button type="submit" className={styles.btn}>
            +
          </button>
        </form>
      )}

      {tf && (
        <form ref={tfRef} onSubmit={(e)=>{e.preventDefault();getTrueFalseToArray(props.id)}} className={styles.ma}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            placeholder="Enter Quiz Question"
            name="question"
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
                name="falseCheckbox"
              ></input>
              Correct Answer
            </label>
          </div>
          <button type="submit" className={styles.btn}>
            +
          </button>
        </form>
      )}

      {fitb && (
        <form ref={fitbRef} onSubmit={(e)=>{e.preventDefault();getFitbToArray(props.id)}} className={styles.mcq}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            placeholder="Enter Quiz Question"
            name="question"
          ></input>
          <input
            style={{ backgroundImage: "url(./mcqSelect.png)" }}
            placeholder="Right Answer"
            name="fitbAnswer"
          ></input>
          <button type="submit" className={styles.btn}>
            +
          </button>
        </form>
      )}

      {na && (
        <form ref={naRef} onSubmit={(e)=>{e.preventDefault();getNAToArray(props.id)}} className={styles.mcq}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            placeholder="Enter Quiz Question"
            name="question"
          ></input>
          <select
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
          </select>
          <input
            style={{ backgroundImage: "url(./mcqSelect.png)" }}
            placeholder="Right Answer"
            name="anwser"
          ></input>
          <button type="submit" className={styles.btn}>
            +
          </button>
        </form>
      )}

      {sa && (
        <form ref={saRef} onSubmit={(e)=>{e.preventDefault();getSAToArray(props.id)}} className={styles.mcq}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            name="question"
            placeholder="Enter Quiz Question"
          ></input>
          <input
            style={{ backgroundImage: "url(./mcqSelect.png)" }}
            placeholder="Right Answer"
            name="answer"
          ></input>
          <button type="submit" className={styles.btn}>
            +
          </button>
        </form>
      )}

      {la && (
        <form ref={laRef} onSubmit={(e)=>{e.preventDefault();getLAToArray(props.id)}} className={styles.mcq}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            placeholder="Enter Quiz Question"
            name="question"
          ></input>
          <input
            style={{ backgroundImage: "url(./mcqSelect.png)" }}
            placeholder="Right Answer"
            name="answer"
          ></input>
          <button type="submit" className={styles.btn}>
            +
          </button>
        </form>
      )}

      {ma && (
        <form ref={maRef} onSubmit={(e)=>{e.preventDefault();getMAToArray(props.id)}} className={styles.ma}>
          <input
            style={{ backgroundImage: "url(./maIcon2.png)" }}
            placeholder="Enter Quiz Question"
            name="question"
          ></input>

          <div>
            <input
              name="optionMcq1"
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz Answer"
            ></input>
            <label>
              {" "}
              <input
                name="correctMcq1"
                value={"correct"}
                type={"checkbox"}
                placeholder="Right Answer"
              ></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              name="optionMcq2"
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz answer"
            ></input>
            <label>
              {" "}
              <input
                name="correctMcq2"
                value={"correct"}
                type={"checkbox"}
                placeholder="Right Answer"
              ></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              name="optionMcq3"
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz answer"
            ></input>
            <label>
              {" "}
              <input
                name="correctMcq3"
                value={"correct"}
                type={"checkbox"}
                placeholder="Right Answer"
              ></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              name="optionMcq4"
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz answer"
            ></input>
            <label>
              {" "}
              <input
                name="correctMcq4"
                value={"correct"}
                type={"checkbox"}
                placeholder="Right Answer"
              ></input>
              Correct Answer
            </label>
          </div>
          <button type="submit" className={styles.btn}>
            +
          </button>
        </form>
      )}
    </div>
  );
}

export default Questions;
