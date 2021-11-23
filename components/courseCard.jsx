import React from "react";
import st from "./../styles/components/courseCard.module.css";
import { MdWatchLater, MdPerson, MdDoneAll } from "react-icons/md";

const CourseCard = (props) => {
  return (
    <div className={st.courseCard}>
      <div className={st.ccLeft}>
        <img src="./pic1.jpg" alt="" />
        <div>
          <h2 className="cursiveFont">Mathematics</h2>
          <main>
            <p>
              <MdWatchLater /> Started From: <span>26 AUG 2021</span>
            </p>
            <p>
              <MdDoneAll />
              Completed: <span>26 AUG 2021</span>
            </p>
            <p>
              <MdPerson /> Teacher: <span>John Patrick</span>
            </p>
          </main>
        </div>
      </div>
        <button className="orgBtn">{props.btn}</button>
    </div>
  );
};

export default CourseCard;
