import React from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard4.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import DashboardMenu from "../../components/dashboard/dashboardMenu";
import { MdDoneAll, MdStar } from "react-icons/md";
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
                  <p>
                    Course Complete <MdDoneAll />
                  </p>
                </div>
                <h3 className={stt.courseDetailsP + " " + "cursiveFont"}>
                  {" "}
                  Course Details
                </h3>
                <CourseCard btn="Buy Again" />
                <h3 className={stt.courseDetailsP + " " + "cursiveFont"}>
                  {" "}
                  Share Your Experience
                </h3>
                <div className={stt.reviewGrid}>
                  <div className={stt.reviewGridBox}>
                    <p>Teacher is responsive and respectful.</p>
                    <main>
                      <div className="rating-css">
                        <div className="star-icon">
                          <input type="radio" name="rating1" id="rating1" />
                          <label htmlFor="rating1">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating1" id="rating2" />
                          <label htmlFor="rating2">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating1" id="rating3" />
                          <label htmlFor="rating3">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating1" id="rating4" />
                          <label htmlFor="rating4">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating1" id="rating5" />
                          <label htmlFor="rating5">
                            <MdStar className="abcc" />
                          </label>
                        </div>
                      </div>
                    </main>
                  </div>
                  <textarea
                    className="landingInput"
                    placeholder="Leave a message for your students"
                  ></textarea>
                  <button className="orgBtn">Send</button>
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
