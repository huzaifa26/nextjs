import React, { useEffect } from "react";
import st from "../styles/components/header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdMenu, MdClose } from "react-icons/md";
import $ from "jquery/dist/jquery";
import { gsap } from "gsap";
import { Power4, Power1 } from "gsap/dist/gsap";

const Header = () => {
  const router = useRouter();
  useEffect(() => {
    //Header animation
    const headerAnim = gsap.timeline({
      paused: true,
    });
    headerAnim
      .fromTo(
        ".headerMobTog",
        {
          height: 0,
        },
        {
          height: "100vh",
          ease: Power4.easeInOut,
          duration: 1,
        }
      )
      .fromTo(
        ".headerMobTop",
        {
          y: "-150%",
          opacity: 0,
        },
        {
          y: "0",
          opacity: 1,
          duration: 0.5,
          ease: Power1.easeInOut,
        },
        "<0.25"
      )
      .fromTo(
        ".headerMobBottom a",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.25,
          stagger: {
            each: 0.125,
          },
        },
        0.25
      );
    // Open header menu in mobile
    $(".openHeaderIcon").click(() => {
      $(".headerMobContent").css({
        display: "block",
      });
      document.body.style.overflowY = "hidden";
      headerAnim.restart();
    });
    // Close header menu in mobile
    $(".closeHeaderIcon").click(() => {
      headerAnim.reverse(0.75);
      $(".headerMobContent").css({
        display: "none",
      });
      document.body.style.overflowY = "auto";
    });
  }, []);
  return (
    <div className={st.headerBg}>
      <div className="box">
        <div className={st.header}>
          <div className={st.headerLogoMenu}>
            <MdMenu className={`${st.menuIcon} openHeaderIcon`} />
            <Link href="/">
              <img src="/logo.svg" alt="Logo" className={st.headerLogo} />
            </Link>
          </div>

          <div className={st.headerLinksBox}>
            <Link passHref={true} href="/dashboard/dashboard1">
              <a
                className={
                  router.pathname == "/dashboard/dashboard1" ? "activeLink" : ""
                }
              >
                Dashboard
              </a>
            </Link>

            <Link passHref={true} href="/">
              <a className={router.pathname == "/" ? "activeHeaderLink" : ""}>
                Home
              </a>
            </Link>
            <Link passHref={true} href="/parents">
              <a className={router.pathname == "/parents" ? "activeLink" : ""}>
                Parents
              </a>
            </Link>
            <Link passHref={true} href="/createProfile">
              <a
                className={
                  router.pathname == "/createProfile" ? "activeLink" : ""
                }
              >
                Create Profile
              </a>
            </Link>
            <Link passHref={true} href="/studentprofile">
              <a
                className={
                  router.pathname == "/studentprofile" ? "activeLink" : ""
                }
              >
                Student Profile
              </a>
            </Link>
            <Link passHref={true} href="/tutorprofile">
              <a
                className={
                  router.pathname == "/tutorprofile" ? "activeLink" : ""
                }
              >
                Tutor Profile
              </a>
            </Link>
          </div>

          <div>
            <Link href="/signup">
              <button className="orgBtn">Sign Up</button>
            </Link>
          </div>

          <div className={`${st.headerMob} headerMobTog`}>
            <div className={st.headerMobDetailsBox + " " + "headerMobContent"}>
              <div className={st.headerMobTop + " " + "headerMobTop"}>
                <div className={st.headerLogoMenu}>
                  <MdClose className={`${st.menuIcon} closeHeaderIcon `} />
                  <img src="/logo.svg" alt="Logo" className={st.headerLogo} />
                </div>
                <div>
                  <Link href="/signup">
                    <button className="orgBtn">Sign Up</button>
                  </Link>
                </div>
              </div>
              <div className={st.headerMobLinks + " " + "headerMobBottom"}>
                <Link passHref={true} href="/dashboard/dashboard1">
                  <a
                    className={
                      router.pathname == "/dashboard/dashboard1"
                        ? "activeLink"
                        : ""
                    }
                  >
                    Dashboard
                  </a>
                </Link>
                <Link passHref={true} href="/">
                  <a
                    className={
                      router.pathname == "/"
                        ? "activeHeaderLink"
                        : "" + " " + "closeHeaderIcon"
                    }
                  >
                    Home
                  </a>
                </Link>
                <Link passHref={true} href="/parents">
                  <a
                    className={
                      router.pathname == "/parents"
                        ? "activeLink"
                        : "" + " " + "closeHeaderIcon"
                    }
                  >
                    Parents
                  </a>
                </Link>
                <Link passHref={true} href="/createProfile">
                  <a
                    className={
                      router.pathname == "/createProfile"
                        ? "activeLink"
                        : "" + " " + "closeHeaderIcon"
                    }
                  >
                    Create Profile
                  </a>
                </Link>
                <Link passHref={true} href="/studentprofile">
                  <a
                    className={
                      router.pathname == "/studentprofile"
                        ? "activeLink"
                        : "" + " " + "closeHeaderIcon"
                    }
                  >
                    Student Profile
                  </a>
                </Link>
                <Link passHref={true} href="/tutorprofile">
                  <a
                    className={
                      router.pathname == "/tutorprofile"
                        ? "activeLink"
                        : "" + " " + "closeHeaderIcon"
                    }
                  >
                    Tutor Profile
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
