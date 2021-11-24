import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import st from "../styles/home.module.css";
import {
  MdChevronRight,
  MdSearch,
  MdStar,
  MdChevronLeft,
  MdArrowForward,
} from "react-icons/md";
import gsap from "gsap/dist/gsap";
import Tilt from "react-tilt/dist/tilt";
import $ from "jquery/dist/jquery";
import Swiper from "swiper";
import SwiperCore, { Navigation } from "swiper/core";
import "swiper/swiper.min.css";
const Home = () => {
  useEffect(() => {
    //Hero section animations
    let heroHeadAnim = gsap.timeline({
      paused: false,
    });
    heroHeadAnim
      .fromTo(
        ".heroHeadingBox h1",
        {
          y: "125%",
        },
        {
          y: "0",
          duration: 1.5,
          ease: "power4",
          stagger: 0.5,
          delay: 1,
        }
      )
      .fromTo(
        ".studentsEnrolledAnim",
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          duration: 0.75,
          opacity: 1,
          stagger: 0.15,
        },
        "<0.25"
      )
      .fromTo(
        ".enrolledTextAnim",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.75,
        }
      )
      .to(
        ".outerCircleAnim",
        {
          rotate: 360,
          repeat: -1,
          duration: 100,
          ease: "linear",
        },
        0
      )
      .to(
        ".innerCircleAnim",
        {
          rotate: -360,
          repeat: -1,
          duration: 40,
          ease: "linear",
        },
        0
      )
      .to(
        ".dashedCircle",
        {
          rotate: 360,
          repeat: -1,
          duration: 50,
          ease: "linear",
        },
        0
      );
    //Home reviews swiper
    SwiperCore.use([Navigation]);
    new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".reviews-right",
        prevEl: ".reviews-left",
      },
      grabCursor: true,
      slidesPerView: 1,
      loop: true,
    });
  }, []);

  // Click outer circle image to display it in inner circle
  const outerImg1 = () => {
    $(".ci").addClass("ciDown").removeClass("ciUp");
    $(".centralImg1").removeClass("ciDown").addClass("ciUp");
  };
  const outerImg2 = () => {
    $(".ci").addClass("ciDown").removeClass("ciUp");
    $(".centralImg2").removeClass("ciDown").addClass("ciUp");
  };
  const outerImg3 = () => {
    $(".ci").addClass("ciDown").removeClass("ciUp");
    $(".centralImg3").removeClass("ciDown").addClass("ciUp");
  };
  const outerImg4 = () => {
    $(".ci").addClass("ciDown").removeClass("ciUp");
    $(".centralImg4").removeClass("ciDown").addClass("ciUp");
  };
  const outerImg5 = () => {
    $(".ci").addClass("ciDown").removeClass("ciUp");
    $(".centralImg5").removeClass("ciDown").addClass("ciUp");
  };

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div className={st.hero}>
        <div className="box">
          <div className={st.heroContentBox}>
            <div className={st.heroTextContainer}>
              <span>#BackToSchool</span>
              <main className="heroHeadingBox">
                <h1 className="cursiveFont">
                  Say <span className="cursiveFont">hello</span> to your
                </h1>
              </main>
              <main className="heroHeadingBox">
                <h1 className="cursiveFont">private English tutor</h1>
              </main>
              <p>
                Are you looking for a trusted online school where you can learn
                English language, math, science, and other subjects? You've come
                to the right place. We are the #1 online school offering live
                online lessons 24/7 with certified tutors.
              </p>

              <Tilt
                className={"Tilt" + " " + st.tiltSt + " " + st.mobTilt}
                options={{ max: 15, scale: 1.075 }}
              >
                <div className={st.heroContainer + " " + "Tilt-inner"}>
                  <div className={st.outerCircle + " " + "outerCircleAnim"}>
                    <img
                      className="outerImg1"
                      src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="outerImg"
                      onClick={outerImg1}
                    />
                    <img
                      className="outerImg2"
                      src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="outerImg"
                      onClick={outerImg2}
                    />
                    <img
                      className="outerImg3"
                      src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="outerImg"
                      onClick={outerImg3}
                    />
                    <img
                      className="outerImg4"
                      src="https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="outerImg"
                      onClick={outerImg4}
                    />
                    <img
                      className="outerImg5"
                      src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="outerImg"
                      onClick={outerImg5}
                    />
                  </div>
                  <div
                    className={st.innerCircle + " " + st.innerCircleMainImage}
                  >
                    <img
                      className={st.centralImg + " " + "ci centralImg5"}
                      src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="centralImg"
                    />
                    <img
                      className={st.centralImg + " " + "ci centralImg4"}
                      src="https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="centralImg"
                    />
                    <img
                      className={st.centralImg + " " + "ci centralImg3"}
                      src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="centralImg"
                    />
                    <img
                      className={st.centralImg + " " + "ci centralImg2"}
                      src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="centralImg"
                    />
                    <img
                      className={st.centralImg + " " + "ci centralImg1"}
                      src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                      alt="centralImg"
                    />
                    <div className={st.sayHi}>
                      <img src="./sayHi.png" alt="" />
                      <span>Say "Hi"</span>
                    </div>
                  </div>
                  <div className={st.innerCircle + " " + "innerCircleAnim"}>
                    <div className={st.icImg1}></div>
                    <div className={st.icImg2}></div>
                    <div className={st.icImg3}></div>
                    <div className={st.icImg4}></div>
                  </div>
                  <div className={st.dashedCircle + " " + "dashedCircle"}></div>
                </div>
              </Tilt>

              <div className={`${st.heroSearchBox} heroSearchBoxSh`}>
                <input
                  type="text"
                  placeholder="Search tutors"
                  className="heroInput"
                />
                <button className={st.heroSearchBtn}>
                  <MdSearch className="searchIcon" />
                </button>
              </div>
              <div className={st.studentsEnrolled}>
                <span>
                  <img
                    className="studentsEnrolledAnim"
                    src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                  <img
                    className="studentsEnrolledAnim"
                    src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                  <img
                    className="studentsEnrolledAnim"
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt=""
                  />
                  <img
                    className="studentsEnrolledAnim"
                    src="./pic4.jpg"
                    alt=""
                  />
                </span>
                <h6 className="enrolledTextAnim">
                  <i>45k+</i> Students Enrolled
                </h6>
              </div>
            </div>

            <Tilt
              className={"Tilt" + " " + st.tiltSt}
              options={{ max: 15, scale: 1.075 }}
            >
              <div className={st.heroContainer + " " + "Tilt-inner"}>
                <div className={st.outerCircle + " " + "outerCircleAnim"}>
                  <img
                    className="outerImg1"
                    src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="outerImg"
                    onMouseEnter={outerImg1}
                  />
                  <img
                    className="outerImg2"
                    src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="outerImg"
                    onMouseEnter={outerImg2}
                  />
                  <img
                    className="outerImg3"
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="outerImg"
                    onMouseEnter={outerImg3}
                  />
                  <img
                    className="outerImg4"
                    src="https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="outerImg"
                    onMouseEnter={outerImg4}
                  />
                  <img
                    className="outerImg5"
                    src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="outerImg"
                    onMouseEnter={outerImg5}
                  />
                </div>
                <div className={st.innerCircle + " " + st.innerCircleMainImage}>
                  <img
                    className={st.centralImg + " " + "ci centralImg5"}
                    src="https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="centralImg"
                  />
                  <img
                    className={st.centralImg + " " + "ci centralImg4"}
                    src="https://images.pexels.com/photos/3184658/pexels-photo-3184658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="centralImg"
                  />
                  <img
                    className={st.centralImg + " " + "ci centralImg3"}
                    src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="centralImg"
                  />
                  <img
                    className={st.centralImg + " " + "ci centralImg2"}
                    src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="centralImg"
                  />
                  <img
                    className={st.centralImg + " " + "ci centralImg1"}
                    src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    alt="centralImg"
                  />
                  <div className={st.sayHi}>
                    <img src="./sayHi.png" alt="" />
                    <span>Say "Hi"</span>
                  </div>
                </div>
                <div className={st.innerCircle + " " + "innerCircleAnim"}>
                  <div className={st.icImg1}></div>
                  <div className={st.icImg2}></div>
                  <div className={st.icImg3}></div>
                </div>
                <div className={st.dashedCircle + " " + "dashedCircle"}></div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
      <div className="box">
        <h1 className={`${st.homeSectionsHeading} cursiveFont`}>
          What sets our online school apart from our competitors?
        </h1>
        <div className={st.homeDetailsSection}>
          <img src="./dsPic1.png" alt="" />
          <div>
            <h1 className="cursiveFont">Best-In-class virtual classroom </h1>
            <p>
              Our platform is designed to make online learning a positive
              experience for both learners and tutors. Some of the features we
              provide to facilitate learning include interactive classroom,
              quality video and audio, smart calendar, training webinars, and
              integrated class materials all in one place. The live lessons take
              place on our platform, so no downloads of{" "}
            </p>
            <button className="orgBtn">Contact Us</button>
          </div>
        </div>
      </div>
      <div className={st.coloredDS}>
        <div className="box">
          <div className={st.homeDetailsSection}>
            <div>
              <h1 className="cursiveFont">Certified native tutors </h1>
              <p>
                Tutors on our platform are not just native English speakers,
                they're qualified professionals who've been carefully selected
                to join our platform. Before a tutor becomes part of our team,
                they're required to prove their qualifications, experience and
                skills. We only select the best tutors in their respective
                fields.
              </p>
              <button className="orgBtn">Read More</button>
            </div>
            <img src="./chb2Hero.png" alt="" />
          </div>
        </div>
      </div>
      <div className="box">
        <div className={st.homeDetailsSection}>
          <img src="./explanation6.png" alt="" />
          <div>
            <h1 className="cursiveFont">Easy to get started </h1>
            <p>
              Joining our platform is an easy and straightforward process. All
              you have to do is sign up in less than five minutes and get
              started. If you're a student, you'll choose your tutor, book
              lessons via your browser or on our mobile app and enjoy structured
              learning. For tutors, they'll have to be approved first before
              they start offering lessons. After being approved, tutors can set
              their own rates and start offering online lessons.
            </p>
            <button className="orgBtn">Get Started</button>
          </div>
        </div>
      </div>
      <div className={st.coloredDS}>
        <div className="box">
          <div className={st.homeDetailsSection + " " + st.reviewsMob}>
            <div>
              <div className={st.reviewsBoxHeads}>
                <img src="./reviewIcon.png" alt="" />
                <h1 className="cursiveFont">Our Customer Stories</h1>
                <h2 className="cursiveFont">4.7 out of 5</h2>
              </div>
              <div className={st.homeReviewsSection + " " + "swiper-container"}>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className={st.reviewsDetailsBox}>
                      <div className={st.imgTextBox}>
                        <img src="https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <main>
                          <h1 className="cursiveFont">Saim Abbas</h1>
                          <h2>CEO at webexhaust.com</h2>
                          <span>
                            <MdStar className={st.starFill} />
                            <MdStar className={st.starFill} />
                            <MdStar className={st.starFill} />
                            <MdStar className={st.starFill} />
                            <MdStar className={st.starEmpty} />
                          </span>
                        </main>
                      </div>
                      <h6 className={st.reviewText}>
                        There are many variations of passages of Lorem Ipsum
                        avail the majority have suffered alteration in some
                        form, by injected or randomised words which don't look
                        even slightly believable are going to use a passage of
                        Lorem Ipsum, you
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className={st.reviewsDetailsBox}>
                      <div className={st.imgTextBox}>
                        <img src="https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                        <main>
                          <h1 className="cursiveFont">Saim Abbas</h1>
                          <h2>CEO at webexhaust.com</h2>
                          <span>
                            <MdStar className={st.starFill} />
                            <MdStar className={st.starFill} />
                            <MdStar className={st.starFill} />
                            <MdStar className={st.starFill} />
                            <MdStar className={st.starEmpty} />
                          </span>
                        </main>
                      </div>
                      <h6 className={st.reviewText}>
                        There are many variations of passages of Lorem Ipsum
                        avail the majority have suffered alteration in some
                        form, by injected or randomised words which don't look
                        even slightly believable are going to use a passage of
                        Lorem Ipsum, you
                      </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className={st.reviewsBtns}>
                <main>
                  <span className="reviews-left">
                    <MdChevronLeft />
                  </span>
                  <span className="reviews-right">
                    <MdChevronRight />
                  </span>
                </main>
                <a>
                  Read All Reviews <MdArrowForward />
                </a>
              </div>
            </div>
            <img src="./explanation5.png" alt="" />
          </div>
        </div>
      </div>
      <div className="box">
        <img
          src="./mobileAppBanner.svg"
          className={st.mobileAppBanner}
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;