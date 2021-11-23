import React, { useEffect } from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard8.module.css";
import DashboardHeader from "../../components/dashboard/dashboardHeader";
import DashboardMenu from "../../components/dashboard/dashboardMenu";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import gsap from "gsap/dist/gsap";

const Dashboard1 = () => {
  useEffect(() => {
    gsap.fromTo(
      ".c",
      {
        scale: 0.75,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        repeat: -1,
        stagger: 0.1,
        duration: 1,
        yoyo: 0.75,
      }
    );
  }, []);
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
              <div className={stt.topBanner}>
                <div className={stt.callCircles}>
                  <div className={stt.circle1 + " " + "c c1"}></div>
                  <div className={stt.circle2 + " " + "c c2"}></div>
                  <div className={stt.circle3 + " " + "c c3"}></div>
                  <div className={stt.circle4 + " " + "c c4"}></div>
                  <div className={stt.circle5 + " " + " c5"}>
                    <MdLocalPhone />
                    <span>Call Us</span>
                  </div>
                </div>
                <div className={stt.tbRight}>
                  <h1 className="cursiveFont">New to Pro Tutor? </h1>
                  <h1 className="cursiveFont">Find Agent Now</h1>
                  <div className={stt.phoneField}>
                    <input type="text" placeholder="Enter Your Phone Number" />
                    <button>Get a Call</button>
                  </div>
                </div>
              </div>
              <main className={stt.mainContactsBox}>
                <MdLocalPhone /> +1 234 567 8901
              </main>
              <main className={stt.mainContactsBox}>
                <MdEmail /> saim@webexhaust.com
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
