import styles from "./Upcomming.module.css";
import {useState} from "react";
import StudentUnGradedQuestion from "./StudentUnGradedQuestion";

function Users(props) {

    const [id,setId]=useState();
    const [showStudentQuestion,setShowStudentQuestion]=useState(false);
    const [showOwnContent,setShowOnwContent]=useState(true);

  return (
    <div className={styles.upcomming}>
        {showStudentQuestion &&
        props.quiz.students.map((element)=>{
            if (element.id === id){
                return <StudentUnGradedQuestion studentQuiz={element}/>
            }
        })
        }

    {showOwnContent &&
    <> 
        <div className={styles.heading}>
            <div>
                <h2>Students</h2>
                <p>Users who attempted Quiz.</p>
            </div>
            <div>
                <button style={{ backgroundImage: `url(filtericon.png)` }}>
                Filters
                </button>
            </div>
            </div>

            <table>
            <tr className={styles.thead}>
                <div>
                <th>Student Name</th>
                <th>Subject</th>
                <th>Question Answered</th>
                <th>Actions</th>
                </div>
            </tr>

            {props.quiz.students.map((c) => {
                return (
                <tr key={""} className={styles.tbody}>
                    <td>{c.username}</td>
                    <td>{props.quiz.title}</td>
                    <td>{c.quiz.length}</td>
                    <td>
                    <button onClick={()=>{setId(c.id);setShowStudentQuestion(true);setShowOnwContent(false)}}>
                        <img alt="" src="./pen.png" />
                    </button>
                    </td>
                </tr>
                );
            })}
            </table>
        </>}
    </div>
  );
}

export default Users;
