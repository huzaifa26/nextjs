import { useState } from "react";
import styles from "./QuizInstructions.module.css";
import Questions from "./Questions";

function QuizInstructions(props) {

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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button onClick={startQuizHandler}>Start Quiz</button>
        </div>}
        </>
     );
}

export default QuizInstructions;