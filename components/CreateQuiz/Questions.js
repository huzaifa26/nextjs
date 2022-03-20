import styles from "../TeacherQuizComponents/CreateQuiz.module.css";
import { useState,useRef } from 'react';

function Questions(props) {

  const questionType=useRef();


  const [mcq, setmcq] = useState(false);
  const [tf, settf] = useState(false);
  const [fitb, setfitb] = useState(false);
  const [ma, setma] = useState(false);
  const [na, setna] = useState(false);
  const [sa, setsa] = useState(false);
  const [la, setla] = useState(false);

  const setAllFalse=()=>{
    setmcq(false);
    settf(false);
    setfitb(false);
    setma(false);
    setna(false);
    setsa(false);
    setla(false);
  }

  const selectQuestionHandler = () => {
    setAllFalse();

    switch (questionType.current.value) {
      case "mcq":
        setmcq(true);
        break;

      case "tf":
        settf(true);
        break;

      case "fitb":
        setfitb(true);
        break;

      case "ma":
        setma(true);
        break;

      case "na":
        setna(true);
        break;

      case "sa":
        setsa(true);
        break;

      case "la":
        setla(true);
        break;
    }
  };

  return (
    <>
      <div>
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
          <option value="mcq">Multiple Choice Questions</option>
          <option value="tf">True / False</option>
          <option value="fitb">Fill-in-the-Blanks</option>
          <option value="ma">Multiple Answers</option>
          <option value="na">Numerical Answer</option>
          <option value="sa">Short Answer</option>
          <option value="la">Long Answer</option>
        </select>
        <h3>1 of 1 Quiz Question</h3>
      </div>

      {mcq && (
        <div className={styles.ma}>
          <input
            style={{ backgroundImage: "url(./maIcon2.png)" }}
            placeholder="Enter Quiz Question"
          ></input>

          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz Question"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz Question"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz Question"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz Question"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>
              Correct Answer
            </label>
          </div>
        </div>
      )}
      
      {tf && (
        <div className={styles.ma}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            placeholder="Enter Quiz Question"
          ></input>
          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              defaultValue="True"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>
              Correct Answer
            </label>
          </div>
          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              defaultValue="False"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>
              Correct Answer
            </label>
          </div>
        </div>
      )}

      {fitb && (
        <div className={styles.mcq}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            placeholder="Enter Quiz Question"
          ></input>
          <input
            style={{ backgroundImage: "url(./mcqSelect.png)" }}
            placeholder="Right Answer"
          ></input>
        </div>
      )}

      {na && (
        <div className={styles.mcq}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            placeholder="Enter Quiz Question"
          ></input>
          <select
            style={{ backgroundImage: "url(./questionTypeIcon.png)" }}
            placeholder="Select Question Type"
            type={"text"}
          >
            <option value="" disabled selected>
              Select Question Type
            </option>
            <option value="mcq">Date</option>
            <option value="tf">Single Digit</option>
            <option value="fitb">Two Digit</option>
            <option value="ma">Multiple Digit</option>
            <option value="na">Decimals</option>
          </select>
          <input
            style={{ backgroundImage: "url(./mcqSelect.png)" }}
            placeholder="Right Answer"
          ></input>
        </div>
      )}

      {sa && (
        <div className={styles.mcq}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            placeholder="Enter Quiz Question"
          ></input>
          <input
            style={{ backgroundImage: "url(./mcqSelect.png)" }}
            placeholder="Right Answer"
          ></input>
        </div>
      )}

      {la && (
        <div className={styles.mcq}>
          <input
            style={{ backgroundImage: "url(./mcqQuestionMark.png)" }}
            placeholder="Enter Quiz Question"
          ></input>
          <input
            style={{ backgroundImage: "url(./mcqSelect.png)" }}
            placeholder="Right Answer"
          ></input>
        </div>
      )}

      {ma && (
        <div className={styles.ma}>
          <input
            style={{ backgroundImage: "url(./maIcon2.png)" }}
            placeholder="Enter Quiz Question"
          ></input>

          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz Question"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>Enter
              Option 1
            </label>
          </div>
          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz Question"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>Enter
              Option 2
            </label>
          </div>
          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz Question"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>Enter
              Option 3
            </label>
          </div>
          <div>
            <input
              style={{ backgroundImage: "url(./maIcon1.png)" }}
              placeholder="Enter Quiz Question"
            ></input>
            <label>
              {" "}
              <input type={"checkbox"} placeholder="Right Answer"></input>Enter
              Option 4
            </label>
          </div>
        </div>
      )}
    </>
  );
}

export default Questions;
