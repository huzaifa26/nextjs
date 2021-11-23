import React, { useEffect } from "react";
import stt from "../../styles/components/dashboard/dashboardMenu.module.css";
import st from "../../styles/components/dashboard/dashboardHeader.module.css";
import { MdSearch, MdNotifications, MdMenu, MdEmail } from "react-icons/md";
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
import { gsap } from "gsap";
import { Power4 } from "gsap/dist/gsap";

const DashboardHeader = (props) => {
  useEffect(() => {
    // Side menu animation on mobile
    const menuAnim = gsap.timeline({});
    menuAnim
      .fromTo(
        ".dhMobAnim",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.1,
        }
      )
      .fromTo(
        ".dhMobBoxAnim",
        {
          width: 0,
        },
        {
          width: "100%",
          ease: Power4.easeInOut,
          duration: 0.5,
        }
      )
      .fromTo(
        ".dmImgBoxAnim",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.25,
        }
      )
      .fromTo(
        ".dml",
        {
          opacity: 0,
          x: "-50%",
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.1,
          ease: "linear",
          stagger: {
            each: 0.1,
          },
        },
        "<-0.15"
      );
    // Open side menu
    $(".openMenu").click(() => {
      $(".dhMobAnim").css({ display: "block" });
      document.body.style.overflowY = "hidden";
      menuAnim.restart();
    });
    $(".closeMenu").click(() => {
      menuAnim.reverse(0.5);

      setTimeout(() => {
        $(".dhMobAnim").css({
          display: "none",
        });
      }, 1500);
      document.body.style.overflowY = "auto";
    });
  }, []);
  //Toggle active link
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
  const showNotificationsBox = () => {
    $(".notificationBoxTog").css({
      display: "block",
    });
    $(".inboxBoxTog").css({
      display: "none",
    });
    $(".notificationBtnTog").css({
      color: "var(--org)",
    });
    $(".inboxBtnTog").css({
      color: "var(--dark)",
    });
  };
  const showInboxBox = () => {
    $(".notificationBoxTog").css({
      display: "none",
    });
    $(".inboxBoxTog").css({
      display: "block",
    });
    $(".notificationBtnTog").css({
      color: "var(--dark)",
    });
    $(".inboxBtnTog").css({
      color: "var(--org)",
    });
  };
  return (
    <div className={st.dashboardHeader}>
      <h1 className={st.dhHeading + " " + "cursiveFont"}>
        <MdMenu className="openMenu" />
        {props.text}
      </h1>
      {props.showLogo ? <img src="./logo.svg" alt="" /> : null}
      <div className={st.dhRight}>
        <button tabIndex={0}>
          <MdSearch />
        </button>
        <button tabIndex={0}>
          <MdNotifications />
          <div className={st.notificaionIndicator}></div>
          <div className={st.notificationBox}>
            <div className={st.notificationHeader}>
              <span
                className="notificationBtnTog"
                onClick={showNotificationsBox}
              >
                <MdNotifications /> Notifications
              </span>
              <span className="inboxBtnTog" onClick={showInboxBox}>
                <MdEmail /> Inbox
              </span>
            </div>
            <div
              className={st.notificationContentBox + " " + "notificationBoxTog"}
            >
              <div className={st.notiboxGrid}>
                <div className={st.notiboxGridBox}>
                  <img src="./pic1.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h2>
                      <span>Saim Abbas</span> reminded you for next class
                    </h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic2.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h2>
                      <span>Rubab Hashmi</span> reminded you for next class
                    </h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic3.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h2>
                      <span>Izza Abbas</span> reminded you for next class
                    </h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic4.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h2>
                      <span>Aiza Abbas</span> reminded you for next class
                    </h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic2.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h2>
                      <span>Rubab Hashmi</span> reminded you for next class
                    </h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic3.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h2>
                      <span>Izza Abbas</span> reminded you for next class
                    </h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={st.inboxContentBox + " " + "inboxBoxTog"}>
              <div className={st.notiboxGrid}>
                <div className={st.notiboxGridBox}>
                  <img src="./pic6.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h3>Saim Abbas</h3>
                    <h2>Please join the class meeting in 2 hours or so.</h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic5.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h3>Saim Abbas</h3>
                    <h2>Please join the class meeting in 2 hours or so.</h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic4.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h3>Saim Abbas</h3>
                    <h2>Please join the class meeting in 2 hours or so.</h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic3.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h3>Saim Abbas</h3>
                    <h2>Please join the class meeting in 2 hours or so.</h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic2.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h3>Saim Abbas</h3>
                    <h2>Please join the class meeting in 2 hours or so.</h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
                <div className={st.notiboxGridBox}>
                  <img src="./pic1.jpg" alt="" />
                  <div className={st.notiboxTextBox}>
                    <h3>Saim Abbas</h3>
                    <h2>Please join the class meeting in 2 hours or so.</h2>
                    <p>1 Day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
        <div className={st.dhrDetails}>
          <h6>Jones Ferdinend</h6>
          <img src="./pic1.jpg" alt="" />
        </div>
      </div>
      <div className={st.dhMob + " " + "dhMobAnim"}>
        <div className={st.dhBackDrop + " " + "closeMenu"}></div>
        <div className={st.dhmContentContainer}>
          <div className={st.dhMobBox + " " + "dhMobBoxAnim"}>
            <div className={st.dhmHeader}>
              <div className={stt.DashboardMenu}>
                <div className={stt.dmImgBox + " " + "dmImgBoxAnim"}>
                  <MdMenu className="closeMenu" />
                  <img src="./logo.svg" alt="" />
                </div>
                <div className={stt.dmList}>
                  <div
                    className={stt.dmLink + " " + "dml dml1 activeDMLink"}
                    onClick={activeDMLink1}
                  >
                    <FaChartPie />
                    <span>Dashboard</span>
                  </div>
                  <div
                    className={stt.dmLink + " " + "dml dml2"}
                    onClick={activeDMLink2}
                  >
                    <FaUserAlt />
                    <span>Profile</span>
                  </div>
                  <div
                    className={stt.dmLink + " " + "dml dml3"}
                    onClick={activeDMLink3}
                  >
                    <FaUsers />
                    <span>Contacts</span>
                  </div>
                  <div
                    className={stt.dmLink + " " + "dml dml4"}
                    onClick={activeDMLink4}
                  >
                    <FaUserTie />
                    <span>Agents</span>
                  </div>
                  <div className={stt.dmSeparator}></div>
                  <div
                    className={stt.dmLink + " " + "dml dml5"}
                    onClick={activeDMLink5}
                  >
                    <FaCog />
                    <span>Settings</span>
                  </div>
                  <div
                    className={stt.dmLink + " " + "dml dml6"}
                    onClick={activeDMLink6}
                  >
                    <FaAward />
                    <span>Subcription</span>
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

export default DashboardHeader;
