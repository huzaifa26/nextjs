import React, { useState } from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard4.module.css";
import sttt from "../../styles/dashboard/dashboard11.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import DashboardMenu from "../../components/dashboard/dashboardMenu";
import { MdModeEdit, MdStar, MdAccessTime, MdNotifications } from "react-icons/md";
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
                <div className={sttt.userDetailsBox}>
                  <main>
                    <h1>$55</h1>
                    <h2>Per Hour</h2>
                  </main>
                  <main>
                    <h1>
                      <MdStar /> 4.7
                    </h1>
                    <h2>43 Reviews</h2>
                  </main>
                  <main>
                    <h1>795+</h1>
                    <h2>Active Students</h2>
                  </main>
                </div>
                <h1 className={sttt.upcomingClassesP + " " + "cursiveFont"}>
                  Upcoming Classes
                </h1>

                <div className={sttt.ucGrid}>
                  <div className={sttt.ucGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                      <div>
                        <h1 className="cursiveFont">Mathermatics</h1>
                        <h2>
                          <MdAccessTime />
                          Start 28 AUG 2021
                        </h2>
                      </div>
                    </main>
                    <div>
                      <span>02</span> : <span>37</span> : <span>14</span>
                    </div>
                    <button className="orgBtn"><MdNotifications /> Notify Me</button>
                  </div>
                  <div className={sttt.ucGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                      <div>
                        <h1 className="cursiveFont">Mathermatics</h1>
                        <h2>
                          <MdAccessTime />
                          Start 28 AUG 2021
                        </h2>
                      </div>
                    </main>
                    <div>
                      <span>02</span> : <span>37</span> : <span>14</span>
                    </div>
                    <button className="orgBtn"><MdNotifications /> Notify Me</button>
                  </div>
                  <div className={sttt.ucGridBox}>
                    <main>
                      <img src="./pic1.jpg" alt="" />
                      <div>
                        <h1 className="cursiveFont">Mathermatics</h1>
                        <h2>
                          <MdAccessTime />
                          Start 28 AUG 2021
                        </h2>
                      </div>
                    </main>
                    <div>
                      <span>02</span> : <span>37</span> : <span>14</span>
                    </div>
                    <button className="orgBtn"><MdNotifications /> Notify Me</button>
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
