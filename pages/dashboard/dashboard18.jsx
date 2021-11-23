import React from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard16.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import {
  MdCameraAlt,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdRadioButtonChecked,
  MdCheckCircle,
  MdClose,
} from "react-icons/md";

const Dashboard16 = () => {
  return (
    <div className={stt.boxp}>
      <div className={stt.boxx}>
        <div className={stt.dashboard16}>
          <DashboardHeader showLogo={true} />
          <div className={stt.d16MainGrid}>
            <div className={stt.d16gridLeft}>
              <h3 className="cursiveFont">PLAN YOUR LESSON</h3>
              <h2>
                A good lesson plan conveys to the teacher as to what is
                important for students when it comes to learning. ... Lesson
                planning provides a step-by-step guide to teachers to delve deep
                into what he/she is teaching. it tells you how the teaching
                should progress with the contents of the lecture.
              </h2>
              <main className={stt.mainBtns}>
                <button className={stt.buy + " " + "orgBtn"}>Buy</button>
              </main>
            </div>
            <div className={stt.d16gridRight}>
                <img src="./buy.png" alt="" />
            </div>
          </div>
          <div className={stt.chooseP}>
            <p className="cursiveFont">CHOOSE TEMPLATE OF YOUR DESIRE</p>
          </div>
          <div className={stt.templateGrid}>
            <div className={stt.templateGridBox}></div>
            <div className={stt.templateGridBox}></div>
            <div className={stt.templateGridBox}></div>
            <div className={stt.templateGridBox}></div>
            <div className={stt.templateGridBox}></div>
            <div className={stt.templateGridBox}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard16;
