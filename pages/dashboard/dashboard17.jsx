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
              <span>
                <MdCameraAlt />
              </span>
              <h1 className="cursiveFont">PROFILE PICTURE</h1>
              <h2>
                One is to help other people to identify you. Another is to help
                you express yourself… and to help others to develop the right
                impression of you. ... You have control over the images you put
                online of yourself, so you might as well use them to your
                benefit.
              </h2>
              <main className={stt.mainBtns}>
                <button className="orgBtn">Upload Video</button>
              </main>
              <main className={stt.leftRightBtns}>
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
