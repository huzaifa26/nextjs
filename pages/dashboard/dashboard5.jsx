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
                  <div className={stt.reviewGridBox}>
                    <p>Do You Recomended This Teacher ?</p>
                    <main>
                      <div className="rating-css">
                        <div className="star-icon">
                          <input type="radio" name="rating2" id="rating12" />
                          <label htmlFor="rating12">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating2" id="rating22" />
                          <label htmlFor="rating22">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating2" id="rating32" />
                          <label htmlFor="rating32">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating2" id="rating42" />
                          <label htmlFor="rating42">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating2" id="rating52" />
                          <label htmlFor="rating52">
                            <MdStar className="abcc" />
                          </label>
                        </div>
                      </div>
                    </main>
                  </div>
                  <div className={stt.reviewGridBox}>
                    <p>Teacher Commucation</p>
                    <main>
                      <div className="rating-css">
                        <div className="star-icon">
                          <input type="radio" name="rating3" id="rating13" />
                          <label htmlFor="rating13">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating3" id="rating23" />
                          <label htmlFor="rating23">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating3" id="rating33" />
                          <label htmlFor="rating33">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating3" id="rating43" />
                          <label htmlFor="rating43">
                            <MdStar className="abcc" />
                          </label>
                          <input type="radio" name="rating3" id="rating53" />
                          <label htmlFor="rating53">
                            <MdStar className="abcc" />
                          </label>
                        </div>
                      </div>
                    </main>
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
