import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import stt from "../styles/login.module.css";
import st from "./../styles/staticPages.module.css";
const CookiesPolicy = () => {
  return (
    <div>
      <Head>
        <title>NON-DISCLOSURE AGREEMENT</title>
      </Head>
      <Header />
      <div className={stt.loginHead}>
        <div className="box">
          <h1 className={`${stt.loginHeader} cursiveFont`}>
            NON-DISCLOSURE AGREEMENT
          </h1>
        </div>
      </div>
      <div className="box">
        <div className={st.staticBox}>
          <h3 className="cursiveFont">
            THIS AGGREMENT <span className="cursiveFont">is made on</span>{" "}
            AUGUST 30, 2021
          </h3>
          <br />
          <h3 className="cursiveFont">BETWEEN</h3>
          <br />
          <h4>
            <i>1. </i>Tutors Online, <span>(the "Disclosing Party"); and</span>
          </h4>
          <h4>
            <i>2. </i>[the Receiving Party],{" "}
            <span> (the "Receiving Party)</span>
          </h4>
          <br />
          <p>collectively referred to as the "Parties".</p>
          <h3 className="cursiveFont">RECITALS</h3>
          <p>
            A. The Receiving Party understands that the Disclosing Party has
            disclosed or may disclose information relating to Tutors Online
            Platform, which to the extent previously, presently, or subsequently
            disclosed to the Receiving Party is hereinafter referred to as
            "Proprietary Information" of the Disclosing Party.
          </p>
          <h3>OPERATIVE PROVISIONS</h3>
          <h5>
            1. In consideration of the disclosure of Proprietary Information by
            the Disclosing Party, the Receiving Party hereby agrees:{" "}
          </h5>
          <ul>
            <li>
              (i) to hold the Proprietary Information in strict confidence and
              to take all reasonable precautions to protect such Proprietary
              Information (including, without limitation, all precautions the
              Receiving Party employs with respect to its own confidential
              materials),{" "}
            </li>
            <li>
              (ii) not to disclose any such Proprietary Information or any
              information derived therefrom to any third person
            </li>
            <li>
              (iii) not to make any use whatsoever at any time of such
              Proprietary Information except to evaluate internally its
              relationship with the Disclosing Party, and{" "}
            </li>
            <li>
              (iv) not to copy or reverse engineer any such Proprietary
              Information.{" "}
            </li>
            <li>
              (v) The Receiving Party shall procure that its employees, agents
              and sub-contractors to whom Proprietary Information is disclosed
              or who have access to Proprietary Information sign a nondisclosure
              or similar agreement in content substantially similar to this
              Agreement
            </li>
          </ul>
          <h5>
            2. Without granting any right or license, the Disclosing Party
            agrees that the foregoing shall not apply with respect to any
            information after five years following the disclosure thereof or any
            information that the Receiving Party can document{" "}
          </h5>
          <ul>
            <li>
              (i) to hold the Proprietary Information in strict confidence and
              to take all reasonable precautions to protect such Proprietary
              Information (including, without limitation, all precautions the
              Receiving Party employs with respect to its own confidential
              materials),{" "}
            </li>
            <li>
              (ii) not to disclose any such Proprietary Information or any
              information derived therefrom to any third person
            </li>
            <li>
              (iii) not to make any use whatsoever at any time of such
              Proprietary Information except to evaluate internally its
              relationship with the Disclosing Party, and{" "}
            </li>
            <li>
              (iv) not to copy or reverse engineer any such Proprietary
              Information.{" "}
            </li>
            <li>
              (v) The Receiving Party shall procure that its employees, agents
              and sub-contractors to whom Proprietary Information is disclosed
              or who have access to Proprietary Information sign a nondisclosure
              or similar agreement in content substantially similar to this
              Agreement
            </li>
          </ul>
          <h5>
            3. Immediately upon the written request by the Disclosing Party at
            any time, the Receiving Party will return to the Disclosing Party
            all Proprietary Information and all documents or media containing
            any such Proprietary Information and any and all copies or extracts
            thereof, save that where such Proprietary Information is a form
            incapable of return or has been copied or transcribed into another
            document, it shall be destroyed or erased, as appropriate.
          </h5>
          <h5>
            4. The Receiving Party understands that nothing herein (i) requires
            the disclosure of any Proprietary Information or (ii) requires the
            Disclosing Party to proceed with any transaction or relationship.
          </h5>
          <h5>
            5. The Receiving Party further acknowledges and agrees that no
            representation or warranty, express or implied, is or will be made,
            and no responsibility or liability is or will be accepted by the
            Disclosing Party, as to, or in relation to, the accuracy of
            completeness of any Proprietary Information made available to the
            Receiving Party or its advisers; it is responsible for making its
            own evaluation of such Proprietary Information.
          </h5>
          <h5>
            6. The failure of either party to enforce its rights under this
            Agreement at any time for any period shall not be construed as a
            waiver of such rights. If any part, term or provision of this
            Agreement is held to be illegal or unenforceable neither the
            validity, nor enforceability of the remainder of this Agreement
            shall be affected. Neither Party shall assign or transfer all or any
            part of its rights under this Agreement without the consent of the
            other Party. This Agreement may not be amended for any other reason
            without the prior written agreement of both Parties. This Agreement
            constitutes the entire understanding between the Parties relating to
            the subject matter hereof unless any representation or warranty made
            about this Agreement was made fraudulently and, save as may be
            expressly referred to or referenced herein, supersedes all prior
            representations, writings, negotiations or understandings with
            respect hereto.
          </h5>
          <h5>
            7. This Agreement shall be governed by the laws of the jurisdiction
            in which the Disclosing Party is located (or if the Disclosing Party
            is based in more than one country, the country in which its
            headquarters are located) (the "Territory") and the parties agree to
            submit disputes arising out of or in connection with this Agreement
            to the non-exclusive of the courts in the Territory.
          </h5>
          <div className={st.ndaAgree}>
            <div className="checkbox">
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">I agree</label>
            </div>
            <h6>Download PDF</h6>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
