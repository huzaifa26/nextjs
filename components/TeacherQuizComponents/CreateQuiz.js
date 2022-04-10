import styles from "./CreateQuiz.module.css";
import { useRef, useState } from "react";
import Main from "../CreateQuiz/Main";
import Instructions from "../CreateQuiz/Instructions";
import Questions from "../CreateQuiz/Questions";
import QuizSetting from "../CreateQuiz/QuizSetting";

function CreateQuiz(props) {
  const quizTitle = useRef();
  const quizClass = useRef();
  const quizCourse = useRef();
  const quizDuration = useRef();

  const [mainComponent, setMainComponent] = useState(true);
  const [instructionComp, setInstructionComp] = useState(false);
  const [questionComp, setQuestionComp] = useState(false);
  const [quizSettingComp, setquizSettingComp] = useState(false);

  const nextHandler = () => {
    if (mainComponent) {
      setMainComponent(false);
      setInstructionComp(true);
    }

    if (instructionComp) {
      setInstructionComp(false);
      setQuestionComp(true);
    }

    if (questionComp) {
      setQuestionComp(false);
      setquizSettingComp(true);
    }
  };

  return (
    <div className={styles.CreateQuiz}>
      <div className={styles.heading}>
        <div>
          <h2>New Quiz</h2>
          <p>Test IQ</p>
        </div>
      </div>

      <div className={styles.quizSection}>
        <div>
          {mainComponent && <Main />}
          {instructionComp && <Instructions />}
          {questionComp && <Questions />}
          {quizSettingComp && <QuizSetting />}
        </div>

        <div className={styles.buttonDiv}>
          <button>Back</button>
          {questionComp && (
            <button className={styles.addQuestion}>Add Question</button>
          )}
          <button onClick={nextHandler}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
