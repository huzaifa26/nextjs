import styles from "../TeacherQuizComponents/CreateQuiz.module.css";
import { useRef } from "react";

function Main(props) {
  const quizTitle = useRef();
  const quizClass = useRef();
  const quizCourse = useRef();
  const quizDuration = useRef();

  return (
    <div>
      <input
        style={{ backgroundImage: "url(./titleIcon.png)" }}
        placeholder="Enter Quiz Name/Title"
        type={"text"}
        onChange={e=>props.getMainTitle(e.target.value)}
      ></input>
      <select
        style={{ backgroundImage: "url(./classIcon.png)" }}
        id="class"
        name="class"
        onChange={e=>props.getMainClass(e.target.value)}
      >
        <option value="" disabled selected>
          Select Class / Grade
        </option>
        <option value="Class / Grade 1">Class / Grade 1</option>
        <option value="Class / Grade 2">Class / Grade 2</option>
        <option value="Class / Grade 3">Class / Grade 3</option>
        <option value="Class / Grade 4">Class / Grade 4</option>
      </select>
      <select
        style={{ backgroundImage: "url(./courseIcon.png)" }}
        id="course"
        name="course"
        onChange={e=>props.getMainCourse(e.target.value)}
      >
        <option value="" disabled selected>
          Enter Course Name or Select
        </option>
        <option value="Computer Science">Computer Science</option>
        <option value="Computer Science">English</option>
        <option value="Maths">Maths</option>
        <option value="Physics">Physics</option>
        <option value="auChemistrydi">Chemistry</option>
      </select>

      <input
        className={styles.num}
        style={{ backgroundImage: "url(./clock.png)" }}
        type={"number"}
        min="0"
        placeholder={"Duration in Minutes"}
        onChange={e=>props.getMainQuizTime(e.target.value)}
      />
    </div>
  );
}

export default Main;
