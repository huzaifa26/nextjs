import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import st from "../styles/parents.module.css";

const Parents = () => {
  return (
    <div>
      <Head>
        <title>Parents</title>
      </Head>
      <Header />
      <div className={st.hero}>
        <div className="box">
          <div className={st.heroContentBox}>
            <div>
              <h1 className="cursiveFont">Dear Parents!</h1>
              <p>
                For the safety and security of our students ,as well as your
                sense of comfort, you will be allowed to log into the live
                lesson at any stage during the lesson. As a parent, you will be
                able to watch the lesson, however, you will not be able to
                participate or interact in the live lesson.
              </p>
              <button className="orgBtn">Contact Us</button>
            </div>
            <img src="./parentsHero.svg" alt="parentsHero" />
          </div>
        </div>
      </div>
      <div className="box">
        <div className={`${st.heroContentBox} ${st.heroContentBox2}`}>
          <img src="./parentsHero2.svg" alt="parentsHero" />
          <div>
            <h1 className="cursiveFont">How Our Platforms Works</h1>
            <p>
              Our online school is a platform that offers live online lessons to
              learners aged 0 level and above from over 100 countries around the
              world. We provide learners with the opportunity to learn English
              language, math, science and other subjects online with certified,
              native or non native speaking tutors.
            </p>
            <button className="orgBtn">Contact Us</button>
          </div>
        </div>
      </div>
      <div className="box">
        <div className={st.explanationBox}>
          <h1 className="cursiveFont">
            This is how our platform works for students
          </h1>
          <div className={st.explanationGrid}>
            <img src="./explanation1.png" alt="" />
            <div>
              <span>1</span>
              <p>
                Visit our website and sign up as a student to join our platform.
                Simply follow the instructions on our sign up page. This should
                take less than 5 minutes.{" "}
              </p>
            </div>
            <div>
              <span>2</span>
              <p>
                Find the tutor that matches your learning needs and budget.
                There are thousands of certified tutors to choose from. You can
                use filters to narrow your search and find a tutor who’s best
                suited for your learning needs. Whether you’re looking for a
                tutor for kids aged 3, an English tutor for adults, or a less
                expensive one for those on a budget, you’re sure to find the
                perfect fit.
              </p>
            </div>
            <img src="./explanation2.png" alt="" />
            <img src="./explanation3.png" alt="" />
            <div>
              <span>3</span>
              <p>
                Book live online lessons with the tutor of your choice. Choose a
                convenient time to take the lessons and book via your device.
                You can take lessons anytime from anywhere provided you have
                stable internet connection. Moreover, the lessons will take
                place on our platform, meaning you won’t have to set up zoom.
              </p>
            </div>
            <div>
              <span>4</span>
              <p>
                Connect with your tutor through our video platform to get
                started. We provide you with all the tools you need to learn
                successfully. You won’t have any problems at all during the live
                lessons.
              </p>
            </div>
            <img src="./explanation4.png" alt="" />
            <img src="./explanation5.png" alt="" />
            <div>
              <span>5</span>
              <p>
                Start learning and keep track of your learning progress. <br />
                Learning for students on our platform is that simple.
              </p>
            </div>
            <div>
              <span>6</span>
              <p>
                Connect with your tutor through our video platform to get
                started. We provide you with all the tools you need to learn
                successfully. You won’t have any problems at all during the live
                lessons.
              </p>
            </div>
            <img src="./explanation6.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Parents;
