import TeacherLayout from "../../components/TeacherLayout/Layout";
import { useState } from "react";
import styles from "./index.module.css";
import QuizActivity from "../../components/TeacherQuizComponents/QuizActivity";
import Quizzez from "../../components/TeacherQuizComponents/Quizzez";
import CreateQuiz from "../../components/TeacherQuizComponents/CreateQuiz";
import Drafts from "../../components/TeacherQuizComponents/Drafts";
import Upcoming from "../../components/TeacherQuizComponents/Upcomming";
import Completed from "../../components/TeacherQuizComponents/Completed";

function TeacherQuiz(props) {
  const [quizActivity, setquizActivity] = useState(true);
  const [quizzes, setquizzes] = useState(false);
  const [createQuiz, setcreateQuiz] = useState(false);
  const [drafts, setdrafts] = useState(false);
  const [upcomming, setupcomming] = useState(false);
  const [completed, setcompleted] = useState(false);

  const quizzezHandler = () => {
    setquizActivity(false);
    setquizzes(true);
    setcreateQuiz(false);
    setdrafts(false);
    setupcomming(false);
    setcompleted(false);
  };

  const createQuizHandler = () => {
    setquizActivity(false);
    setquizzes(false);
    setcreateQuiz(true);
    setdrafts(false);
    setupcomming(false);
    setcompleted(false);
  };

  const draftsHandler = () => {
    setquizActivity(false);
    setquizzes(false);
    setcreateQuiz(false);
    setdrafts(true);
    setupcomming(false);
    setcompleted(false);
  };

  const upcommingHandler = () => {
    setquizActivity(false);
    setquizzes(false);
    setcreateQuiz(false);
    setdrafts(false);
    setupcomming(true);
    setcompleted(false);
  };

  const completedHandler = () => {
    setquizActivity(false);
    setquizzes(false);
    setcreateQuiz(false);
    setdrafts(false);
    setupcomming(false);
    setcompleted(true);
  };

  return (
    <div>
      <TeacherLayout>
        <div className={styles.quiz}>
          <h1 className={styles.quizh1}>Quiz</h1>
          <div className={styles.buttonDiv} id={styles.buttonGroup}>
            <button
              onClick={quizzezHandler}
              className={quizzes ? styles.buttonActive : styles.buttonInactive}
            >
              <img
                alt=""
                src={quizzes ? "./darkquizzez.png" : "./quizzez.png"}
              />
              <span>Quizzes</span> <p className={styles.p}>10</p>
            </button>

            <button
              onClick={createQuizHandler}
              className={
                createQuiz ? styles.buttonActive : styles.buttonInactive
              }
            >
              <img alt="" src={createQuiz ? "./darkcq.png" : "./cq.png"} />
              <span>Create Quiz</span> <p className={styles.p}>10</p>
            </button>

            <button
              onClick={draftsHandler}
              className={drafts ? styles.buttonActive : styles.buttonInactive}
            >
              <img alt="" src={drafts ? "./darkdraft.png" : "./drafts.png"} />
              <span>Drafts</span> <p className={styles.p}>10</p>
            </button>

            <button
              onClick={upcommingHandler}
              className={
                upcomming ? styles.buttonActive : styles.buttonInactive
              }
            >
              <img
                alt=""
                src={upcomming ? "./darkupcomming.png" : "./upcomming.png"}
              />
              <span> Ungraded</span> <p className={styles.p}>10</p>
            </button>

            <button
              onClick={completedHandler}
              className={
                completed ? styles.buttonActive : styles.buttonInactive
              }
            >
              <img
                alt=""
                src={completed ? "./darkcompleted.png" : "./completed.png"}
              />
              <span> Completed </span>
              <p className={styles.p}>10</p>
            </button>
          </div>

          {quizActivity && <QuizActivity />}
          {quizzes && <Quizzez />}
          {createQuiz && <CreateQuiz />}
          {drafts && <Drafts />}
          {upcomming && <Upcoming />}
          {completed && <Completed />}
        </div>
      </TeacherLayout>
    </div>
  );
}

export default TeacherQuiz;
