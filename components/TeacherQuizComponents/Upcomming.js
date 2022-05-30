import styles from "./Upcomming.module.css";
import {useState} from "react";
import Users from "./Users";

function Upcomming() {

  const [showUsers,setShowUsers]=useState(false);

  const tableContent = [
    {
      id:"1",
      title: "Quiz 1",
      c_g: "Class/Grade",
      course: "English",
      t_n: "Tutors Name",
      sd_t: "20-10-2021 | 10:00 PM",
      ed_t: "21-10-2021 | 10:00 PM",
      students:[
        {
          id:"1",
          username:"jhon",
          quiz:[
            {id:1,userAnswer:"8", questionType: 'Multiple Choice Questions', question: '2+2=?', options:['2','8','4','6'] ,questionType: "Multiple Choice Questions",answer:4},
            {id:2,userAnswer:"true", questionType: 'True / False', question: '1+1=2?',answer:'true'},
            {id:3,userAnswer:"2", questionType: 'Fill-in-the-Blanks', question: 'what is 2+_=4?', answer: '2'},
            {id:4,userAnswer:['4','2'], questionType: 'Multiple Answers', question: 'Select all divisor of 4.',options:['8','4','2','1'],questionType: "Multiple Answers",answer:['4','2']},
            {id:5,userAnswer:"10", questionType: 'Numerical Answer', question: 'when is 5+5?', naType: 'Two Digit', answer: '10'},
            {id:6,userAnswer:"Hello world", questionType: 'Long Answer', question: 'Define derivation?', answer: 'hello world'},
          ]
        },
        {
          id:"2",
          username:"micheal",
          quiz:[
            {id:1,userAnswer:"4", questionType: 'Multiple Choice Questions', question: '2+2=?', options:['2','8','4','6'] ,questionType: "Multiple Choice Questions",answer:4},
            {id:2,userAnswer:"true", questionType: 'True / False', question: '1+1=2?',answer:'true'},
            {id:3,userAnswer:"4", questionType: 'Fill-in-the-Blanks', question: 'what is 2+_=4?', answer: '2'},
            {id:4,userAnswer:['2','4'], questionType: 'Multiple Answers', question: 'Select all divisor of 4.',options:['8','4','2','1'],questionType: "Multiple Answers",answer:['4','2']},
            {id:5,userAnswer:"10", questionType: 'Numerical Answer', question: 'when is 5+5?', naType: 'Two Digit', answer: '10'},
            {id:6,userAnswer:"Welcome to programming.", questionType: 'Long Answer', question: 'Define derivation?', answer: 'hello world'},
          ]
        }
      ]
    },
 
  ];

  const [id,setId]=useState();
  let test=null;
  const [showOwnContent,setShowOwnContent]=useState(true);

  return (
    <div className={styles.upcomming}>
      {showUsers && 
        
        tableContent.map((element)=>{
          if(element.id === id){
            console.log(element)
            return <Users quiz={element}/>
          }
        })
      }

      {showOwnContent && 
      <>
        <div className={styles.heading}>
          <div>
            <h2>Ungraded Quizzes</h2>
            <p>All published & Scheduled Quizzes List</p>
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
              <th>Quiz Title</th>
              <th>Subject</th>
              <th>Start Date & Time</th>
              <th>End Date & Time</th>
              <th>Actions</th>
            </div>
          </tr>

          {tableContent.map((c) => {
            return (
              <tr key={""} className={styles.tbody}>
                <td>{c.title}</td>
                <td>{c.course}</td>
                <td>{c.sd_t}</td>
                <td>{c.ed_t}</td>
                <td>
                  <button>
                    <img alt="" src="./actionEye.png" />
                  </button>
                  <button onClick={()=>{setId(c.id);setShowUsers(true);setShowOwnContent(false)}}>
                    <img alt="" src="./pen.png" />
                  </button>

                  <button>
                    <img alt="" src="./chain.png" />
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

export default Upcomming;
