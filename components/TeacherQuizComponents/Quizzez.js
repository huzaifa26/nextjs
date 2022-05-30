import styles from "./Quizzez.module.css";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import QuizzesQuestions from "./QuizzesQuestions";
import EditQuizQuestions from "./EditQuizQuestion";

function Quizzez(props) {

  const quiz = useSelector((state) => {console.log(state.quiz);return state.quiz});


  const tableContent = [
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",

      q_s: "Scheduled - Published",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",

      q_s: "Scheduled - Published",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",

      q_s: "Scheduled - Published",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",

      q_s: "Scheduled - Published",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",

      q_s: "Scheduled - Published",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",

      q_s: "Scheduled - Published",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",

      q_s: "Scheduled - Published",
    },
    {
      qt: "Quiz Title",
      c_g: "Class/Grade",
      c: "Subject",

      q_s: "Scheduled - Published",
    },
  ];
  
  const [showTable,setShowTable]=useState(true);
  const [showQuiz,setShowQuiz]=useState(false);
  const [showEditQuiz,setShowEditQuiz]=useState(false);
  const [id,setId]=useState();

  useEffect(()=>{
    setShowTable(true);
    setShowQuiz(false)
  },[])


  return (
    <div className={styles.Quizzez}>
      <div className={styles.heading}>
        <div>
          <h2>Quizzes</h2>
          <p>All Tutor's Quizzes</p>
        </div>
        <div>
          <button style={{ backgroundImage: `url(filtericon.png)` }}>
            Filters
          </button>
        </div>
      </div>
      {
        <table>
        <tr className={styles.thead}>
          <div>
            <th>Quiz Title</th>
            <th>Class/Grade</th>
            <th>Subject</th>

            <th>Quiz Status</th>
            <th>Actions</th>
          </div>
        </tr>

        {showQuiz && 
            <QuizzesQuestions question={quiz[id]}/>
        }

        {showEditQuiz && 
            <EditQuizQuestions question={quiz[id]}/>
        }

        {showTable &&
        quiz.map((c) => {
          return (
            <tr key={""} className={styles.tbody}>
              <td>{c.title}</td>
              <td>{c.className}</td>
              <td>{c.course}</td>

              <td>{"Scheduled - Published"}</td>
              <td>
                <button onClick={(e)=>{setId(c.id);setShowTable(false);setShowQuiz(true);setShowEditQuiz(false)}}>
                  <img alt="" src="./actionEye.png" />
                </button>
                <button onClick={()=>{setId(c.id);setShowEditQuiz(true);setShowTable(false);setShowQuiz(false)}}>
                  <img alt="" src="./actionIcon.png" />
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      }
    </div>
  );
}

export default Quizzez;
