import { useState } from "react";
import styles from "./StartedQuiz.module.css";
import QuizInstructions from "./QuizInstructions";
import Questions from "./Questions";

function StartedQuiz() {
  const tableContent = [
    {
      qt: "Quiz Title",
      c: "Subject",
      ques: "10/15",
      ed_t: "21-10-2021 | 10:00 PM",
    },
    {
      qt: "Quiz Title",
      c: "Subject",
      ques: "10/15",
      ed_t: "21-10-2021 | 10:00 PM",
    },
    {
      qt: "Quiz Title",
      c: "Subject",
      ques: "10/15",
      ed_t: "21-10-2021 | 10:00 PM",
    },
    {
      qt: "Quiz Title",
      c: "Subject",
      ques: "10/15",
      ed_t: "21-10-2021 | 10:00 PM",
    },
    {
      qt: "Quiz Title",
      c: "Subject",
      ques: "10/15",
      ed_t: "21-10-2021 | 10:00 PM",
    },
    {
      qt: "Quiz Title",
      c: "Subject",
      ques: "10/15",
      ed_t: "21-10-2021 | 10:00 PM",
    },
  ];

  const [showInstructions, setShowInstructions] = useState(false);

  const showInstructionsHandler = () => {
    setShowInstructions(true);
  };

  const closeInstructionsHandler = () => {
    setShowInstructions(false);
  };

  const [quizStarted, setQuizStarted] = useState(false);

  const showQuestionModal = () => {
    setQuizStarted(true);
    setShowInstructions(false);
  };

  const closeQuestionModal = () => {
    setQuizStarted(false);
  };

  return (
    <>
      {quizStarted && <Questions closeQuestionModal={closeQuestionModal} />}

      {showInstructions && (
        <QuizInstructions
          showQuestionModal={showQuestionModal}
          closeInstructionsHandler={closeInstructionsHandler}
        />
      )}
      <div className={styles.startedQuiz}>
        <div className={styles.heading}>
          <div>
            <h2>Started Quizzes</h2>
            <p>All the Quizzes you need to complete</p>
          </div>
          <div>
            <button style={{ backgroundImage: `url(filtericon.png)` }}>
              Filters
            </button>
          </div>
        </div>

        <table>
          <tr className={styles.thead}>
            <div>
              <th>Quiz Title</th>
              {/* <th>Class/Grade</th> */}
              <th>Subject</th>

              <th>Questions Answered</th>
              <th>End Date & Time</th>
              <th></th>
            </div>
          </tr>

          {tableContent.map((c) => {
            return (
              <tr key={""} className={styles.tbody}>
                <td>{c.qt}</td>
                {/* <td>{c.c_g}</td> */}
                <td>{c.c}</td>

                <td>{c.ques}</td>
                <td>{c.ed_t}</td>
                {/* <td><button onClick={showInstructionsHandler} button><img alt="" src='./actionIcon.png'/></button></td> */}
                <td>
                  <button onClick={showInstructionsHandler} button>
                    Resume Quiz
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default StartedQuiz;
