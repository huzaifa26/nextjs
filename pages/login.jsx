import React from "react";
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
        <title>Login</title>
      </Head>
      <Header />
      <div className={st.loginHead}>
        <div className="box">
          <h1 className={`${st.loginHeader} cursiveFont`}>Login</h1>
        </div>
      </div>
      <div className={st.loginBox}>
        <img src="/loginImg.svg" alt="" />
        <div className={st.loginBoxContent}>
          <h1 className={`${st.loginHealine} cursiveFont`}>
            Welcome back to Pro<span className="cursiveFont">Tutor</span>
          </h1>
          <h1 className={`${st.loginBoxHeading} cursiveFont`}>Login</h1>
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
              <a>Forgot Password?</a>
            </div>
            <button className="orgBtn">Login</button>
          </div>
          <h6>
            Don't have an account?{" "}
            <Link href="/signup">
              <a>Get Started</a>
            </Link>
          </h6>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
