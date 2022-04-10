import styles from "../TeacherQuizComponents/CreateQuiz.module.css";
import { useState,useRef } from "react";

function QuizSetting() {

    let classname=styles.quizSetting;

    const [showSetting,setShowSetting]=useState(false);

    const showSettingHandler=()=>{
        setShowSetting(!showSetting);
    }

    const [showSetting1,setShowSetting1]=useState(false);

    const showSettingHandler1=()=>{
        setShowSetting1(!showSetting1);
    }

    const [showModal,setShowModal]=useState(false);

    const showSettingModal = ()=>{
        setShowModal(true);
    }


    const [showModal2,setShowModal2]=useState(false);

    const showSettingModal2 = ()=>{
        setShowModal2(true);
    }
    

    return ( 
        <div className={classname}>
            <label> <p>Quiz Progress Bar</p><input type={'checkbox'}  placeholder='Right Answer'></input></label>
            <label> <p>Randomize Questions</p><input type={'checkbox'}  placeholder='Right Answer'></input></label>
            <label> <p>Quiz Timer</p>{showSetting && <img alt="" onClick={showSettingModal} src="./settingIcon.png"/>} <input onChange={showSettingHandler} type={'checkbox'}  placeholder='Right Answer'></input></label>
            <label> <p>Auto Advance</p><input type={'checkbox'}  placeholder='Right Answer'></input></label>
            
        </div>
     );
}

export default QuizSetting;