import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import st from "../styles/login.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import $ from "jquery/dist/jquery";
const Login = () => {
  const showPassword = () => {
    let input = $(".passwordInput");
    input.attr("type") == "password"
      ? input.attr("type", "text")
      : input.attr("type", "password");
    $(".sp").css({ display: "none" });
    $(".hp").css({ display: "flex" });
  };
  const hidePassword = () => {
    let input = $(".passwordInput");
    input.attr("type") == "password"
      ? input.attr("type", "text")
      : input.attr("type", "password");
    $(".sp").css({ display: "flex" });
    $(".hp").css({ display: "none" });
  };
  return (
    <div>
      <Head>
        <title>Sign Up</title>
      </Head>
      <Header />
      <div className={st.loginHead}>
        <div className="box">
          <h1 className={`${st.loginHeader} cursiveFont`}>Sign Up</h1>
        </div>
      </div>
      <div className={st.loginBox}>
        <img src="/signupImg.svg" alt="" />
        <div className={st.loginBoxContent}>
          <h1 className={`${st.loginHealine} cursiveFont`}>
            Welcome back to Pro<span className="cursiveFont">Tutor</span>
          </h1>
          <h1 className={`${st.loginBoxHeading} cursiveFont`}>Sign Up</h1>
          <div className={st.loginInputsBox}>
            <input type="text" className="landingInput" placeholder="Email" />
            <div className={st.passwordBox}>
              <input
                type="password"
                className="landingInput passwordInput"
                placeholder="Password"
              />
              <FaEyeSlash className="sp" onClick={showPassword} />
              <FaEye
                className={`hp ${st.eyeOpenIcon}`}
                onClick={hidePassword}
              />
            </div>
            <div className={st.rememberBox}>
              <div className="checkbox">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a>Sign in As a Tutor</a>
            </div>
            <button className="orgBtn">Sign Up</button>
          </div>
          <h6>
            Already have an account?{" "}
            <Link href="/login">
              <a>Login</a>
            </Link>
          </h6>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
