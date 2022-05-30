import styles from './Upcomming.module.css';
import { useSelector } from 'react-redux';


function Upcomming(props) {

  const quizez=useSelector(state=>state.allQuizez)

  console.log(quizez)

    const tableContent = [
      {
        RandomizeNo: true,
        className: "Class / Grade 1",
        course: "Computer Science",
        endDate: "2022-05-25",
        endTime: "21:10",
        instruction: "Complete the Quiz in Given Time. ",
        questions: [
            {questionType: 'Multiple Choice Questions', mcqQuestion: '2+2=?', optionMcq1: '2', optionMcq2: '8', optionMcq3: '4', optionMcq4: "6",questionType: "Multiple Choice Questions"},
            {questionType: 'True / False', tfquestion: '1+1=2?', answer: true},
            {questionType: 'Fill-in-the-Blanks', tfquestion: 'what is 2+_=4?', answer: '2'},
            {questionType: 'Multiple Answers', mcqQuestion: 'Select all divisor of 4.', optionMcq1: '8', optionMcq2: '4', optionMcq3: '2',optionMcq4: "1",questionType: "Multiple Answers"},
            {questionType: 'Numerical Answer', naQuestion: 'when is 5+5?', naType: 'Two Digit', naAnswer: '10'},
            {questionType: 'Long Answer', laQuestion: 'Define derivation?', laAnswer: ''},
        ],
        quizTimer: true,
        quizbar: true,
        qutoAdvance: true,
        startDate: "2022-05-25",
        startTime: "21:00",
        time: "10",
        title: "Quiz 1",
      }
    ];


    return ( 
    <div className={styles.upcomming}>
        <div className={styles.heading}>
            <div>
                <h2>Upcoming Quizzes</h2>
                <p>All published & Scheduled Quizzes List</p>
            </div>
            <div>
                <button style={{backgroundImage:`url(filtericon.png)`}}>Filters</button>
            </div>
        </div>

        <table height="199px">
                <tr className={styles.thead}>
                    <div>
                        <th>Quiz Title</th>
                        <th>Subject</th>
                        <th>Start Date & Time</th>
                        <th>End Date & Time</th>
                        <th>Submission Countdown</th>
                    </div>
                </tr>

                {tableContent.map((c)=>{
                    return(
                        <tr key={''} className={styles.tbody}>
                            <td>{c.title}</td>
                            <td>{c.course}</td>
                            <td>{c.startDate + " | " + c.startTime}</td>
                            <td>{c.endDate + " | " + c.endTime}</td>
                            <td>{c.time}</td>
                        </tr>
                    )
                })}
        </table>
    </div> 
    );
}

export default Upcomming;