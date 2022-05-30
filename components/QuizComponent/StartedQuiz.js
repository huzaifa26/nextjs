import { useEffect, useState } from "react";
import styles from "./StartedQuiz.module.css";
import QuizInstructions from "./QuizInstructions";
import Questions from "./Questions";
import { useSelector } from 'react-redux';

function StartedQuiz() {
  const quizez=useSelector(state=>state.allQuizez);
  const tableContent = [
    {
      RandomizeNo: true,
      className: "Class / Grade 1",
      course: "Computer Science",
      endDate: "2022-05-25",
      endTime: "21:10",
      instruction: "Complete the Quiz in Given Time. ",
      questions: [
          {questionType: 'Multiple Choice Questions', question: '2+2=?', option:['2','8','4','6'] ,questionType: "Multiple Choice Questions",answer:4},
          {questionType: 'True / False', question: '1+1=2?',answer:'true'},
          {questionType: 'Fill-in-the-Blanks', question: 'what is 2+_=4?', answer: '2'},
          {questionType: 'Multiple Answers', question: 'Select all divisor of 4.',option:['8','4','2','1'],questionType: "Multiple Answers",answer:['4','2']},
          {questionType: 'Numerical Answer', question: 'when is 5+5?', naType: 'Two Digit', answer: '10'},
          {questionType: 'Long Answer', question: 'Define derivation?', answer: 'hello world'},
      ],
      quizTimer: true,
      quizbar: true,
      qutoAdvance: true,
      startDate: "2022-05-29",
      startTime: "20:25",
      time: "10",
      title: "Quiz 1",
    }
  ];

  // CODE FOR CHECKING TIME.
  // const [counter,setCounter]=useState(0)

  // setTimeout(() => {
  //   setCounter(counter+1)
  // }, 0.9);

  // let date;

  // const showQuiz

  // useEffect(()=>{
  //   let today=new Date();
  //   let year=today.getFullYear();
  //   let month=today.getMonth()+1;
  //   let day=today.getDate();
  
  //   let hours=today.getHours();
  //   let mint=today.getMinutes();
  
  //   let dates=year+"-"+"0"+month+"-"+day;
  //   let time=hours+":"+mint;
  //   date=dates+time;
  //   let oldDate=tableContent[0].startDate+tableContent[0].startTime;
  //   console.log(1)
  //   if(oldDate === date){
  //     console.log("haha");
  //   }
  // },[counter])

  

  const [showInstructions, setShowInstructions] = useState(false);

  const [instruction,setInstruction]=useState()
  const showInstructionsHandler = (instruction) => {
    setInstruction(instruction);
    setShowInstructions(true);
  };

  const closeInstructionsHandler = () => {
    setShowInstructions(false);
  };

  const [quizStarted, setQuizStarted] = useState(false);

  const showQuestionModal = () => {
    setQuizStarted(true);
    setShowInstructions(false);
  };

  let closeQuestionModal = () => {
    setQuizStarted(false);
  };

  return (
    <>
      {quizStarted && <Questions quiz={instruction} closeQuestionModal={closeQuestionModal} />}
      {showInstructions && (
        <QuizInstructions
          quiz={instruction}
          showQuestionModal={showQuestionModal}
          closeInstructionsHandler={closeInstructionsHandler}
        />
      )}
      
      <div className={styles.startedQuiz}>
        <div className={styles.heading}>
          <div>
            <h2>Started Quizzes</h2>
            <p>All the Quizzes you need to complete</p>
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
              <th>Questions Answered</th>
              <th>End Date & Time</th>
              <th></th>
            </div>
          </tr>

          {tableContent.map((c) => {
            return (
              <tr key={""} className={styles.tbody}>
                <td>{c.title}</td>
                <td>{c.course}</td>
                <td>{c.questions.length}</td>
                <td>{c.endDate+" | "+c.endTime}</td>
                <td>
                  <button onClick={()=>showInstructionsHandler(c)} button>
                    Resume Quiz
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default StartedQuiz;
