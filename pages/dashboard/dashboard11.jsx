import React from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard4.module.css";
import sttt from "../../styles/dashboard/dashboard11.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import DashboardMenu from "../../components/dashboard/dashboardMenu";
import { MdModeEdit, MdPlayCircleFilled } from "react-icons/md";
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
            <div className={st.dParent}>
              <div className={sttt.d11ParentContainer}>
                <div className={sttt.d11TopBanner}>
                  <img className={sttt.d11TBCover} src="./pic1.jpg" alt="" />
                  <img className={sttt.d11TBProfile} src="./pic2.jpg" alt="" />
                </div>
                <div className={sttt.textDetails}>
                  <h1 className="cursiveFont">Muhammad Saim Abbas</h1>
                  <h2>Senior Frontend Developer</h2>
                </div>
                <div className={sttt.bioTextBanner}>
                  <img src="./reviewIcon.png" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate perspiciatis dignissimos saepe vitae rerum? Nulla
                    facilis esse officiis dolorem quis, distinctio sit numquam
                    cupiditate quae expedita aspernatur aut quisquam soluta
                    molestiae neque maxime ad ullam iure voluptatum? Officiis
                    eum at delectus earum iste quam obcaecati maxime esse nihil.
                    Laborum, hic!
                  </p>
                  <main>
                    <MdModeEdit />
                  </main>
                </div>
                <div className={sttt.d11Mainbtns}>
                  <button className="orgBtn">Edit Profile</button>
                  <button className="transBtn">View Public Mode</button>
                </div>
                <h1 className={sttt.upcomingClassesP + " " + "cursiveFont"}>
                  Upcoming Classes
                </h1>
                <div className={stt.videoLessonsGrid2}>
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
