import React from "react";
import st from "../../styles/components/dashboard/dashboardMenu.module.css";
import $ from "jquery/dist/jquery";
import {
  FaChartPie,
  FaUserAlt,
  FaUsers,
  FaUserTie,
  FaCog,
  FaAward,
  FaAngleLeft,
} from "react-icons/fa";

const DashboardMenu = () => {
  const activeDMLink1 = () => {
    $(".dml").removeClass("activeDMLink");
    $(".dml1").addClass("activeDMLink");
  };
  const activeDMLink2 = () => {
    $(".dml").removeClass("activeDMLink");
    $(".dml2").addClass("activeDMLink");
  };
  const activeDMLink3 = () => {
    $(".dml").removeClass("activeDMLink");
    $(".dml3").addClass("activeDMLink");
  };
  const activeDMLink4 = () => {
    $(".dml").removeClass("activeDMLink");
    $(".dml4").addClass("activeDMLink");
  };
  const activeDMLink5 = () => {
    $(".dml").removeClass("activeDMLink");
    $(".dml5").addClass("activeDMLink");
  };
  const activeDMLink6 = () => {
    $(".dml").removeClass("activeDMLink");
    $(".dml6").addClass("activeDMLink");
  };
  return (
    <div className={st.DashboardMenu}>
      <div className={st.dmImgBox}>
        <FaAngleLeft />
        <img src="./logo.svg" alt="" />
      </div>
      <div className={st.dmList}>
        <div className={st.dmLink + " " + "dml dml1 activeDMLink"} onClick={activeDMLink1}>
          <FaChartPie />
          <span>Dashboard</span>
        </div>
        <div className={st.dmLink + " " + "dml dml2"} onClick={activeDMLink2}>
          <FaUserAlt />
          <span>Profile</span>
        </div>
        <div className={st.dmLink + " " + "dml dml3"} onClick={activeDMLink3}>
          <FaUsers />
          <span>Contacts</span>
        </div>
        <div className={st.dmLink + " " + "dml dml4"} onClick={activeDMLink4}>
          <FaUserTie />
          <span>Agents</span>
        </div>
        <div className={st.dmSeparator}></div>
        <div className={st.dmLink + " " + "dml dml5"} onClick={activeDMLink5}>
          <FaCog />
          <span>Settings</span>
        </div>
        <div className={st.dmLink + " " + "dml dml6"} onClick={activeDMLink6}>
          <FaAward />
          <span>Subcription</span>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
