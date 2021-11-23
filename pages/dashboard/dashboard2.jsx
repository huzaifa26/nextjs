import React from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard1.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import DashboardMenu from "../../components/dashboard/dashboardMenu";
const Dashboard1 = () => {
  return (
    <div className={st.dashboard}>
      <div className={st.dashboardLeft}>
        <DashboardMenu />
      </div>
      <div className={st.dashboardRight}>
        <div className={st.dashboardRightContent}>
          <DashboardHeader text="Teachers Dashboard" />
          <div className={st.dmrContentContainer}>
            <div className={st.dParent}>
              <div className={stt.dashboard1BoxParent}>
                <div className={stt.d1Left}>
                  <img src="./pic1.jpg" alt="" />
                  <h1 className="cursiveFont">Saim Abbas</h1>
                  <h3>Senior Frontend Developer</h3>
                  <div className={stt.separator}></div>
                  <div className={stt.textDetailsBox}>
                    <h2>From</h2>
                    <span>Pakistan</span>
                  </div>
                  <div className={stt.textDetailsBox}>
                    <h2>Age</h2>
                    <span>21 years old</span>
                  </div>
                  <div className={stt.textDetailsBox}>
                    <h2>Students</h2>
                    <span>1 active student</span>
                  </div>
                  <button className="orgBtn">VIEW SCHEDULED LESSONS</button>
                </div>
                <div className={stt.d1Right}>
                  <div className={stt.d1box}>
                    <span>
                      <img src="./d1icon1.png" alt="" />
                    </span>
                    <h4 className="cursiveFont">Scheduled Lessons</h4>
                  </div>
                  <div className={stt.d1box}>
                    <span>
                      <img src="./d1icon2.png" alt="" />
                    </span>
                    <h4 className="cursiveFont">Saved Lessons</h4>
                  </div>
                  <div className={stt.d1box}>
                    <span>
                      <img src="./d1icon4.png" alt="" />
                    </span>
                    <h4 className="cursiveFont">Teachers Comments</h4>
                  </div>
                  <div className={stt.d1box}>
                    <span>
                      <img src="./d1icon4.png" alt="" />
                    </span>
                    <h4 className="cursiveFont">Saved Lesson Videos</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
