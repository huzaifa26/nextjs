import { useState } from "react";
import styles from "./QuizInstructions.module.css";
import Questions from "./Questions";

function QuizInstructions(props) {

    const tableContent = [
        {
          RandomizeNo: true,
          className: "Class / Grade 1",
          course: "Computer Science",
          endDate: "2022-05-25",
          endTime: "21:10",
          instruction: "Complete the Quiz in Given Time. ",
          questions: [
              {questionType: 'Multiple Choice Questions', mcqQuestion: '2+2=?', option:['2','8','4','6'] ,questionType: "Multiple Choice Questions"},
            //   {questionType: 'True / False', tfquestion: '1+1=2?', answer: true},
            //   {questionType: 'Fill-in-the-Blanks', tfquestion: 'what is 2+_=4?', answer: '2'},
            //   {questionType: 'Multiple Answers', mcqQuestion: 'Select all divisor of 4.', optionMcq1: '8', optionMcq2: '4', optionMcq3: '2',optionMcq4: "1",questionType: "Multiple Answers"},
            //   {questionType: 'Numerical Answer', naQuestion: 'when is 5+5?', naType: 'Two Digit', naAnswer: '10'},
            //   {questionType: 'Long Answer', laQuestion: 'Define derivation?', laAnswer: ''},
          ],
          quizTimer: true,
          quizbar: true,
          qutoAdvance: true,
          startDate: "2022-05-25",
          startTime: "21:00",
          time: "10",
          title: "Quiz 1",
        }
      ];

    const closeModalHandler=()=>{
        props.closeInstructionsHandler();
    }

    const startQuizHandler=()=>{
        // props.closeInstructionsHandler();
        props.showQuestionModal();
    }

    return ( 
        <>
        {<div className={styles.QuizInstructions}>
            <img alt="" className={styles.crossImage} onClick={closeModalHandler} src={'./crossIcon.png'}/>
            <div className={styles.headingDiv}>
                <img alt="" src={'./quizInstructionsIcon.png'}/>
                <h1>Quiz Instructions</h1>
            </div>
            <p>{props.quiz.instruction}</p>
            <button onClick={startQuizHandler}>Start Quiz</button>
        </div>}
        </>
     );
}

export default QuizInstructions;