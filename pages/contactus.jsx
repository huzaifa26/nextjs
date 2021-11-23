import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import stt from "../styles/login.module.css";
import st from "./../styles/staticPages.module.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
const Contactus = () => {
  return (
    <div>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Header />
      <div className={stt.loginHead}>
        <div className="box">
          <h1 className={`${stt.loginHeader} cursiveFont`}>Contact Us</h1>
        </div>
      </div>
      <div className="box">
        <div className={st.staticBoxContact}>
          <div className={st.contactusGrid}>
            <div className={st.contactusGridBox}>
              <h1 className="cursiveFont">Get In Touch</h1>
              <h2>
                <MdPhone /> +1 244 777 3083
              </h2>
              <h2>
                <MdEmail /> saim@webexhaust.com
              </h2>
              <h2>
                <MdLocationOn /> Planet Earth, Milkyway Galaxy
              </h2>
            </div>
            <div className={st.contactusGridBox}>
              <input type="text" className="landingInput" placeholder="Name" />
              <input type="text" className="landingInput" placeholder="Email" />
              <textarea className="landingInput" placeholder="Message"></textarea>
              <button className="orgBtn">Send</button>
            </div>
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

export default Contactus;
