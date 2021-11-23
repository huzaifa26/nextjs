import React, { useState } from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard4.module.css";
import sttt from "../../styles/dashboard/dashboard11.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import DashboardMenu from "../../components/dashboard/dashboardMenu";
import { MdModeEdit, MdPlayCircleFilled } from "react-icons/md";
const Dashboard1 = () => {
  const [disabled, setDisabled] = useState(true);
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
                  <main>
                    <h1 className="cursiveFont">Muhammad Saim Abbas</h1>
                    <MdModeEdit />
                  </main>
                  <main>
                    <h2>Senior Frontend Developer</h2>
                    <MdModeEdit />
                  </main>
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
                <div className={sttt.formGrid}>
                  <div className={sttt.formGridBox}>
                    <label htmlFor="">First Name</label>
                    <main>
                      <input type="text" defaultValue="Saim" />
                      <MdModeEdit />
                    </main>
                  </div>
                  <div className={sttt.formGridBox}>
                    <label htmlFor="">Last Name</label>
                    <main>
                      <input type="text" defaultValue="Abbas" />
                      <MdModeEdit />
                    </main>
                  </div>
                  <div className={sttt.formGridBox}>
                    <label htmlFor="">Email Address</label>
                    <main>
                      <input type="text" defaultValue="saim@webexhaust.com" />
                      <MdModeEdit />
                    </main>
                  </div>
                  <div className={sttt.formGridBox}>
                    <label htmlFor="">Hourly Rate</label>
                    <main>
                      <input type="text" defaultValue="$50" />
                      <MdModeEdit />
                    </main>
                  </div>
                  <div className={sttt.formGridBox}>
                    <label htmlFor="">language Spoked</label>
                    <main>
                      <input type="text" defaultValue="English" />
                      <MdModeEdit />
                    </main>
                  </div>
                  <div className={sttt.formGridBox}>
                    <label htmlFor="">Country</label>
                    <main>
                      <input type="text" defaultValue="Pakistan" />
                      <MdModeEdit />
                    </main>
                  </div>
                  <div className={sttt.formGridBox}>
                    <label htmlFor="">Work Experience</label>
                    <main>
                      <input type="text" defaultValue="5D Solutions, LLC" />
                      <MdModeEdit />
                    </main>
                  </div>
                  <div className={sttt.formGridBox}>
                    <span>
                      <label htmlFor="">University</label>
                      <a href="">Add more</a>
                    </span>
                    <main>
                      <input type="text" defaultValue="UET Taxila" />
                      <MdModeEdit />
                    </main>
                  </div>
                  <div className={sttt.formGridBox}>
                    <div className="checkbox">
                      <input type="checkbox" name="" id="nda" />
                      <label className={sttt.nda} htmlFor="nda">
                        NON-DISCLOSURE AGGRENT
                      </label>
                    </div>
                  </div>
                </div>
                <div className={sttt.formSaveBtn}>
                  <button className="disabledBtn">SAVE</button>
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
