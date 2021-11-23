import React from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import st from "../styles/createProfile.module.css";
import { MdKeyboardArrowRight, MdLocationOn, MdDone } from "react-icons/md";
import $ from "jquery/dist/jquery";
import st2 from "../styles/profile.module.css";
import gsap from "gsap/dist/gsap";

const CreateProfile = () => {
/*   const goTo2 = () => {
    $(".stepBox1").removeClass("active").addClass("done");
    $(".stepBox2").removeClass("pending").addClass("active");
    gsap.to(".contentBox1", {
      x: "50",
      opacity: "0",
      duration: 0.75,
    });
    setTimeout(() => {
      $(".contentBox1, .contentBox3, .contentBox4, .contentBox5").css({
        display: "none",
      });
    }, 1001);
    $(".contentBox2").css({
      display: "block",
    });
    gsap.from(".contentBox2", {
      x: "50",
      opacity: "0",
      duration: 0.75,
      delay: 0.75
    });
  }; */
  const goTo2 = () => {
    $(".stepBox1").removeClass("active").addClass("done");
    $(".stepBox2").removeClass("pending").addClass("active");
    $(".contentBox1, .contentBox3, .contentBox4, .contentBox5").css({
      display: "none",
    });
    $(".contentBox2").css({
      display: "block",
    });
  };
  const goTo3 = () => {
    $(".stepBox2").removeClass("active").addClass("done");
    $(".stepBox3").removeClass("pending").addClass("active");
    $(".contentBox1, .contentBox2, .contentBox4, .contentBox5").css({
      display: "none",
    });
    $(".contentBox3").css({
      display: "block",
    });
  };
  const goTo4 = () => {
    $(".stepBox3").removeClass("active").addClass("done");
    $(".stepBox4").removeClass("pending").addClass("active");
    $(".contentBox1, .contentBox3, .contentBox2, .contentBox5").css({
      display: "none",
    });
    $(".contentBox4").css({
      display: "block",
    });
  };
  const goTo5 = () => {
    $(".stepBox4").removeClass("active").addClass("done");
    $(".stepBox5").removeClass("pending").addClass("active");
    $(".contentBox1, .contentBox3, .contentBox4, .contentBox2").css({
      display: "none",
    });
    $(".contentBox5").css({
      display: "block",
    });
  };
  return (
    <div>
      <Head>
        <title>Create Profile</title>
      </Head>
      <Header />
      <div className={st.progBoxParent}>
        <div className="box">
          <div className={st.progBox}>
            <div className="stepBox stepBox1 active">
              <span>
                <h5>1</h5>
                <MdLocationOn className="activeIcon" />
                <MdDone className="doneIcon" />
              </span>
              <p>About</p>
            </div>
            <h6>
              <MdKeyboardArrowRight />
            </h6>
            <div className="stepBox stepBox2 pending">
              <span>
                <h5>2</h5>
                <MdLocationOn className="activeIcon" />
                <MdDone className="doneIcon" />
              </span>
              <p>Description</p>
            </div>
            <h6>
              <MdKeyboardArrowRight />
            </h6>
            <div className="stepBox stepBox3 pending">
              <span>
                <h5>3</h5>
                <MdLocationOn className="activeIcon" />
                <MdDone className="doneIcon" />
              </span>
              <p>Picture</p>
            </div>
            <h6>
              <MdKeyboardArrowRight />
            </h6>
            <div className="stepBox stepBox4 pending">
              <span>
                <h5>4</h5>
                <MdLocationOn className="activeIcon" />
                <MdDone className="doneIcon" />
              </span>
              <p>Video</p>
            </div>
            <h6>
              <MdKeyboardArrowRight />
            </h6>
            <div className="stepBox stepBox5 pending">
              <span>
                <h5>5</h5>
                <MdLocationOn className="activeIcon" />
                <MdDone className="doneIcon" />
              </span>
              <p>Done</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className={st.contentBoxContainer}>
          <div className="contentBox contentBox1">
            <div className={st.contentBoxHeading}>
              <h1 className="cursiveFont">About</h1>
              <p>
                Tell us everything about you Lorem ipsum dolor sit amet co at
                maxime, et dolore delectus placeat totam? Amet, earum?
              </p>
            </div>
            <div className={`${st2.inputGrid} ${st.inputGrid}`}>
              <main>
                <label htmlFor="">First Name</label>
                <input type="text" className="landingInput" />
              </main>
              <main>
                <label htmlFor="">Last Name</label>
                <input type="text" className="landingInput" />
              </main>
              <main>
                <label htmlFor="">Email</label>
                <input type="text" className="landingInput" />
              </main>
              <main>
                <label htmlFor="">Country of origin</label>
                <input type="text" className="landingInput" />
              </main>
              <main>
                <label htmlFor="">Languages spoken</label>
                <input type="text" className="landingInput" />
              </main>
              <main>
                <label htmlFor="">Level</label>
                <input type="text" className="landingInput" />
              </main>
              <main>
                <label htmlFor="">Subject taught</label>
                <input type="text" className="landingInput" />
              </main>
              <main>
                <label htmlFor="">Hourly rate</label>
                <input type="text" className="landingInput" />
              </main>
              <main>
                <label htmlFor="">Phone number (optional)</label>
                <input type="text" className="landingInput" />
              </main>
              <main>
                <div className={st.checkbox18}>
                  <div className="checkbox">
                    <input type="checkbox" name="18" id="18" />
                    <label htmlFor="18">I confirm I’m over 18</label>
                  </div>
                </div>
              </main>
            </div>
            <button className={`${st.nextBtn} orgBtn`} onClick={goTo2}>
              Next
            </button>
          </div>
          <div className="contentBox contentBox2">
            <div className={st.contentBoxHeading}>
              <h1 className="cursiveFont">Profile Description</h1>
              <p>
                Update or create a new profile headline and description. It will
                appear on your tutor card on the “Find tutors” page.
              </p>
            </div>

            <div className={st.sbh2}>
              <h2 className="cursiveFont">
                Description for English-speaking students
              </h2>
              <main>
                <img src="./chb2Hero.png" alt="" />
                <div className={st.cbh2Inputs}>
                  <div>
                    <label htmlFor="">Tufayel k.</label>
                    <input
                      type="text"
                      className="landingInput"
                      placeholder="Your headline"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Tufayel k.</label>
                    <textarea
                      className="landingInput"
                      placeholder="Your description"
                    ></textarea>
                  </div>
                  <h3>400 characters minimum. 0 characters currently.</h3>
                  <button className={`${st.nextBtn} orgBtn`} onClick={goTo3}>
                    Next
                  </button>
                </div>
              </main>
            </div>
          </div>
          <div className="contentBox contentBox3">
            <div className={st.contentBoxHeading}>
              <h1 className="cursiveFont">Profile photo</h1>
              <p>Make a great first impression</p>
            </div>
            <div className={st.sbh3}>
              <button className={`${st.takeBtn} orgBtn`}>Take a Photo</button>
              <main>
                <span>Your Photo</span>
              </main>
              <button className={`${st.nextBtn} orgBtn`} onClick={goTo4}>
                Next
              </button>
            </div>
          </div>
          <div className="contentBox contentBox4">
            <div className={st.contentBoxHeading}>
              <h1 className="cursiveFont">Video introduction</h1>
              <p>
                Choose a video file to upload. Make sure it follows our
                guidelines
              </p>
            </div>
            <div className={st.sbh3}>
              <button className={`${st.takeBtn} orgBtn`}>Upload Video</button>
              <main>
                <span>Drag and drop your Video here</span>
              </main>
              <button className={`${st.nextBtn} orgBtn`} onClick={goTo5}>
                Next
              </button>
            </div>
          </div>
          <div className="contentBox contentBox5">
            <div className={st.cbh5}>
              <h1 className="cursiveFont">Congratulations</h1>
              <h2>
                We Wil Review Your Profile For Approval Within The Next 24 Hours
              </h2>
              <button className="orgBtn">Go to Home</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateProfile;
