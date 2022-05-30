import styles from "../TeacherQuizComponents/CreateQuiz.module.css";
import { useState,useRef } from "react";

function QuizSetting(props) {

    let classname=styles.quizSetting;

    const [showSetting,setShowSetting]=useState(false);

    const showSettingHandler=()=>{
        setShowSetting(!showSetting);
    }

    const [showModal,setShowModal]=useState(false);

    const showSettingModal = ()=>{
        setShowModal(!showModal);
    }

        return ( 
        <div className={styles.quizSetting}>
            {showModal && <div className={styles.settingModal}>
            
            </div>}

            <div>
                <label> <p>Quiz Progress Bar</p></label>
                <input onChange={(e)=>props.getQuizBar(e.target.checked)} type={'checkbox'}  placeholder='Right Answer'></input>
            </div>

            <div>
                <label> <p>Randomize Questions</p></label>
                <input onChange={(e)=>props.getRandomizeQuestion(e.target.checked)} type={'checkbox'}  placeholder='Right Answer'></input>
            </div>

            <div>
                <label> <p>Quiz Timer</p></label>
                {showSetting && <img alt="" onClick={showSettingModal} src="./settingIcon.png"/>} 
                <input onChange={(e)=>{showSettingHandler();props.getQuizTimer(e.target.checked)}} type={'checkbox'}  placeholder='Right Answer'></input>
            </div>
            
            <div>
                <label> <p>Auto Advance</p></label>
                <input onChange={(e)=>props.getAutoAdvance(e.target.checked)} type={'checkbox'}  placeholder='Right Answer'></input>
            </div>
        </div>
     );
}

export default QuizSetting;

