import React from "react";
import st from "../styles/components/footer.module.css";

const Footer = () => {
  return (
    <div className={st.footerBg}>
      <div className="box">
        <div className={st.footer}>
          <div className={st.footerTop}>
            <div>
              <img src="/logo.svg" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                ullam quaerat vero nobis! Quibusdam, ad. Lorem ipsum dolor sit
                amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <h1>ABOUT</h1>
              <a href="">Home</a>
              <a href="">About Us</a>
              <a href="">Booking</a>
              <a href="">Contact</a>
            </div>
            <div>
              <h1>HELP</h1>
              <a href="">About Us</a>
              <a href="">Legal Warning</a>
              <a href="">Cookie Policy</a>
              <a href="">Privacy Policy</a>
            </div>
            <div>
              <h1>CONTACT US</h1>
              <a href="">Demo@gmai.com</a>
              <a href="">+460-507-6865</a>
              <a href="">Facebook</a>
              <a href="">Instragram</a>
            </div>
          </div>
          <div className={st.footerBottom}>
            <p>Copyright © 2021</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
