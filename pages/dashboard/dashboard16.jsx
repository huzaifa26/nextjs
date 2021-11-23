import React from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard16.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import {
  MdVideocam,
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
              <span>
                <MdVideocam />
              </span>
              <h1 className="cursiveFont">
                START RECORDING YOUR SELF INTRODUCTION VIDEO
              </h1>
              <h2>
                This recording, which usually runs for not more than two
                minutes, is a quicker way of showcasing your qualifications,
                skills, and even your personality to your potential
                employer.This video helps you stand out among a multitude of
                teacher applications
              </h2>
              <main className={stt.mainBtns}>
                <button className="orgBtn">Preview Video</button>
                <button className="orgBtn">Upload Video</button>
              </main>
              <main
                className={stt.leftRightBtns + " " + stt.leftRightBtnsVideo}
              >
                <span>
                  <MdKeyboardArrowLeft />
                </span>
                <span>
                  <MdKeyboardArrowRight />
                </span>
              </main>
            </div>
            <div className={stt.d16gridRight}>
              <img src="./pic1.jpg" alt="" />
              <main>
                <MdRadioButtonChecked className={stt.red} />
                <MdCheckCircle className={stt.green} />
                <MdClose className={stt.red} />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard16;
