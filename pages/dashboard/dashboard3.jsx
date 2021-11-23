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
          <DashboardHeader text="Students Dashboard" />
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
                <div className={stt.d3Right}>
                  <div className={stt.scheduledLessonsListBox}>
                    <div className={stt.teacherDetails}>
                      <img src="./pic2.jpg" alt="" />
                      <span>
                        <h1 className="cursiveFont">Saim Abbas</h1>
                        <h2>Frontend Developer</h2>
                      </span>
                    </div>
                    <div className={stt.lessonTimings}>
                      <h2 className="cursiveFont">2021/02/19</h2>
                      <h2 className="cursiveFont">3:23 GMT TIME ZONE</h2>
                    </div>
                    <button className="orgBtn">Join Class</button>
                  </div>
                  <div className={stt.scheduledLessonsListBox}>
                    <div className={stt.teacherDetails}>
                      <img src="./pic3.jpg" alt="" />
                      <span>
                        <h1 className="cursiveFont">Saim Abbas</h1>
                        <h2>Frontend Developer</h2>
                      </span>
                    </div>
                    <div className={stt.lessonTimings}>
                      <h2 className="cursiveFont">2021/02/19</h2>
                      <h2 className="cursiveFont">3:23 GMT TIME ZONE</h2>
                    </div>
                    <button className="orgBtn">Join Class</button>
                  </div>
                  <div className={stt.scheduledLessonsListBox}>
                    <div className={stt.teacherDetails}>
                      <img src="./pic3.jpg" alt="" />
                      <span>
                        <h1 className="cursiveFont">Saim Abbas</h1>
                        <h2>Frontend Developer</h2>
                      </span>
                    </div>
                    <div className={stt.lessonTimings}>
                      <h2 className="cursiveFont">2021/02/19</h2>
                      <h2 className="cursiveFont">3:23 GMT TIME ZONE</h2>
                    </div>
                    <button className="orgBtn">Join Class</button>
                  </div>
                  <div className={stt.scheduledLessonsListBox}>
                    <div className={stt.teacherDetails}>
                      <img src="./pic3.jpg" alt="" />
                      <span>
                        <h1 className="cursiveFont">Saim Abbas</h1>
                        <h2>Frontend Developer</h2>
                      </span>
                    </div>
                    <div className={stt.lessonTimings}>
                      <h2 className="cursiveFont">2021/02/19</h2>
                      <h2 className="cursiveFont">3:23 GMT TIME ZONE</h2>
                    </div>
                    <button className="orgBtn">Join Class</button>
                  </div>
                  <div className={stt.scheduledLessonsListBox}>
                    <div className={stt.teacherDetails}>
                      <img src="./pic3.jpg" alt="" />
                      <span>
                        <h1 className="cursiveFont">Saim Abbas</h1>
                        <h2>Frontend Developer</h2>
                      </span>
                    </div>
                    <div className={stt.lessonTimings}>
                      <h2 className="cursiveFont">2021/02/19</h2>
                      <h2 className="cursiveFont">3:23 GMT TIME ZONE</h2>
                    </div>
                    <button className="orgBtn">Join Class</button>
                  </div>
                  <div className={stt.scheduledLessonsListBox}>
                    <div className={stt.teacherDetails}>
                      <img src="./pic3.jpg" alt="" />
                      <span>
                        <h1 className="cursiveFont">Saim Abbas</h1>
                        <h2>Frontend Developer</h2>
                      </span>
                    </div>
                    <div className={stt.lessonTimings}>
                      <h2 className="cursiveFont">2021/02/19</h2>
                      <h2 className="cursiveFont">3:23 GMT TIME ZONE</h2>
                    </div>
                    <button className="orgBtn">Join Class</button>
                  </div>
                  <div className={stt.scheduledLessonsListBox}>
                    <div className={stt.teacherDetails}>
                      <img src="./pic3.jpg" alt="" />
                      <span>
                        <h1 className="cursiveFont">Saim Abbas</h1>
                        <h2>Frontend Developer</h2>
                      </span>
                    </div>
                    <div className={stt.lessonTimings}>
                      <h2 className="cursiveFont">2021/02/19</h2>
                      <h2 className="cursiveFont">3:23 GMT TIME ZONE</h2>
                    </div>
                    <button className="orgBtn">Join Class</button>
                  </div>
                  <div className={stt.scheduledLessonsListBox}>
                    <div className={stt.teacherDetails}>
                      <img src="./pic4.jpg" alt="" />
                      <span>
                        <h1 className="cursiveFont">Saim Abbas</h1>
                        <h2>Frontend Developer</h2>
                      </span>
                    </div>
                    <div className={stt.lessonTimings}>
                      <h2 className="cursiveFont">2021/02/19</h2>
                      <h2 className="cursiveFont">3:23 GMT TIME ZONE</h2>
                    </div>
                    <button className="orgBtn">Join Class</button>
                  </div>
                  <div className={stt.scheduledLessonsListBox}>
                    <div className={stt.teacherDetails}>
                      <img src="./pic5.jpg" alt="" />
                      <span>
                        <h1 className="cursiveFont">Saim Abbas</h1>
                        <h2>Frontend Developer</h2>
                      </span>
                    </div>
                    <div className={stt.lessonTimings}>
                      <h2 className="cursiveFont">2021/02/19</h2>
                      <h2 className="cursiveFont">3:23 GMT TIME ZONE</h2>
                    </div>
                    <button className="orgBtn">Join Class</button>
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
