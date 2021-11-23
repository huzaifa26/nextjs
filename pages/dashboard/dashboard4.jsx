import React from "react";
import st from "../../styles/dashboard/dashboard.module.css";
import stt from "../../styles/dashboard/dashboard4.module.css";
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
              <div className={stt.dParent}>
                <div className={stt.d4ParentContainer}>
                  <div className={stt.mainHeadingFull}>
                    <p>Subscription</p>
                  </div>
                  <div className={stt.subscriptionGrid}>
                    <div className={stt.subscriptionGridBox}>
                      <h1 className="cursiveFont">Basic</h1>
                      <h2>$64.35/mo</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sit, corrupti?
                      </p>
                      <button className="orgBtn">Get Started</button>
                    </div>
                    <div className={stt.subscriptionGridBox}>
                      <h1 className="cursiveFont">Premium</h1>
                      <h2>$195.35/mo</h2>
                      <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit.
                      </p>
                      <button className="orgBtn">Get Started</button>
                    </div>
                    <div className={stt.subscriptionGridBox}>
                      <h1 className="cursiveFont">Pro</h1>
                      <h2>$250.35/mo</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nemo tempo olestiae aliquam.
                      </p>
                      <button className="orgBtn">Get Started</button>
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
