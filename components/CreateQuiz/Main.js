import styles from "../TeacherQuizComponents/CreateQuiz.module.css";
import { useRef } from "react";

function Main(props) {
  const quizTitle = useRef();
  const quizClass = useRef();
  const quizCourse = useRef();
  const quizDuration = useRef();

  const nextHandler = () => {
    quizClass.current.focus();
    if (quizTitle && quizClass && quizCourse) {
      console.log("haha");
    }
  };

  return (
    <div>
      <input
        ref={quizTitle}
        style={{ backgroundImage: "url(./titleIcon.png)" }}
        placeholder="Enter Quiz Name/Title"
        type={"text"}
      ></input>
      <select
        ref={quizClass}
        style={{ backgroundImage: "url(./classIcon.png)" }}
        id="class"
        name="class"
      >
        <option value="" disabled selected>
          Select Class / Grade
        </option>
        <option value="volvo">Class / Grade 1</option>
        <option value="saab">Class / Grade 2</option>
        <option value="fiat">Class / Grade 3</option>
        <option value="audi">Class / Grade 4</option>
      </select>
      <select
        ref={quizCourse}
        style={{ backgroundImage: "url(./courseIcon.png)" }}
        id="course"
        name="course"
      >
        <option value="" disabled selected>
          Enter Course Name or Select
        </option>
        <option value="volvo">Computer Science </option>
        <option value="saab">English</option>
        <option value="fiat">Maths</option>
        <option value="audi">Physics</option>
        <option value="audi">Chemistry</option>
      </select>

      <input
        ref={quizDuration}
        className={styles.num}
        style={{ backgroundImage: "url(./clock.png)" }}
        type={"number"}
        min="0"
        placeholder={"Duration in Minutes"}
      />

      {/* <div className={styles.buttonDiv}>
                    <button >Back</button>
                    {/* {<button className={styles.addQuestion}>Add Question</button>}
                    <button onClick={nextHandler}>Next</button>
                </div>
                 */}
    </div>
  );
}

export default Main;
