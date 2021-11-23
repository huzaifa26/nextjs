import React from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard4.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import DashboardMenu from "../../components/dashboard/dashboardMenu";
import { MdPlayCircleFilled } from "react-icons/md";
import CourseCard from "../../components/courseCard";
const Dashboard1 = () => {
  return (
    <div className={st.dashboard}>
      <div className={st.dashboardLeft}>
        <DashboardMenu />
      </div>
      <div className={st.dashboardRight}>
        <div className={st.dashboardRightContent}>
          <DashboardHeader text="Course Completed" />
          <div className={st.dmrContentContainer}>
            <div className={stt.dParent}>
              <div className={stt.d4ParentContainer}>
                <div className={stt.mainHeadingFull}>
                  <p className="cursiveFont">Saved Video Lessons</p>
                </div>

                <div className={stt.videoLessonsGrid}>
                  <div className={stt.videoLessonsGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                    </main>
                    <div>
                      <h1 className="cursiveFont">Mathematics</h1>
                      <span>
                        <MdPlayCircleFilled />
                        Play Video
                      </span>
                    </div>
                  </div>
                  <div className={stt.videoLessonsGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                    </main>
                    <div>
                      <h1 className="cursiveFont">Mathematics</h1>
                      <span>
                        <MdPlayCircleFilled />
                        Play Video
                      </span>
                    </div>
                  </div>
                  <div className={stt.videoLessonsGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                    </main>
                    <div>
                      <h1 className="cursiveFont">Mathematics</h1>
                      <span>
                        <MdPlayCircleFilled />
                        Play Video
                      </span>
                    </div>
                  </div>
                  <div className={stt.videoLessonsGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                    </main>
                    <div>
                      <h1 className="cursiveFont">Mathematics</h1>
                      <span>
                        <MdPlayCircleFilled />
                        Play Video
                      </span>
                    </div>
                  </div>
                  <div className={stt.videoLessonsGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                    </main>
                    <div>
                      <h1 className="cursiveFont">Mathematics</h1>
                      <span>
                        <MdPlayCircleFilled />
                        Play Video
                      </span>
                    </div>
                  </div>
                  <div className={stt.videoLessonsGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                    </main>
                    <div>
                      <h1 className="cursiveFont">Mathematics</h1>
                      <span>
                        <MdPlayCircleFilled />
                        Play Video
                      </span>
                    </div>
                  </div>
                  <div className={stt.videoLessonsGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                    </main>
                    <div>
                      <h1 className="cursiveFont">Mathematics</h1>
                      <span>
                        <MdPlayCircleFilled />
                        Play Video
                      </span>
                    </div>
                  </div>
                  <div className={stt.videoLessonsGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                    </main>
                    <div>
                      <h1 className="cursiveFont">Mathematics</h1>
                      <span>
                        <MdPlayCircleFilled />
                        Play Video
                      </span>
                    </div>
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
