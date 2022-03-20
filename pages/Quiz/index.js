import Layout from "../../components/Layout/Layout";
import styles from './Quiz.module.css';
import { useState } from "react";
import Upcomming from "../../components/QuizComponent/Upcomming";
import StartedQuiz from "../../components/QuizComponent/StartedQuiz";
import CompletedQuiz from "../../components/QuizComponent/CompletedQuiz";

function Quiz(){

    const [upccomming,setUpccommingQuiz]=useState(true)
    const [startedQuiz,setStartedQuiz]=useState(false)
    const [completed,setCompleted]=useState(false)


    const upcommingHandler = ()=>{
        setUpccommingQuiz(true)
        setStartedQuiz(false)
        setCompleted(false)
    }

    const startedQuizHandler = ()=>{
        setUpccommingQuiz(false)
        setStartedQuiz(true)
        setCompleted(false)
    }

    const completedHandler = ()=>{
        setUpccommingQuiz(false)
        setStartedQuiz(false)
        setCompleted(true)
    }

    return(
        <div >
            <Layout>
                <div className={styles.quiz}>
                    <h1 className={styles.quizh1}>Quiz</h1>
                    <div className={styles.buttonDiv}>

                        <button onClick={upcommingHandler} className={upccomming?styles.buttonActive:styles.buttonInactive}>
                            <img alt="" src={upccomming?"./completedStudentD.png":"./completedStudent.png"}/>Upcomming<p>10</p>
                        </button>

                        <button onClick={startedQuizHandler} className={startedQuiz?styles.buttonActive:styles.buttonInactive}>
                            <img alt="" src={startedQuiz?"./startedStudentD.png":"./startedStudent.png"}/>Started Quiz<p>10</p>
                        </button>

                        <button onClick={completedHandler} className={completed?styles.buttonActive:styles.buttonInactive}>
                            <img alt="" src={completed?"./completedStudentD.png":"./completedStudent.png"}/>Completed<p>10</p>
                        </button>

                    </div>
                    {/* <div> */}
                        {upccomming && <Upcomming />}
                        {startedQuiz && <StartedQuiz />}
                        {completed && <CompletedQuiz />}
                    {/* </div> */}
                </div>
            </Layout>

        </div>
    )
}

export default Quiz;