import styles from './CompletedQuiz.module.css';

function CompletedQuiz() {

    const tableContent=[
        {
            "qt":"Quiz Title",
            "c_g":'Class/Grade',
            "c":"Course",
            "t_n":'Tutors Name',
            'q_a':"1 of 10",
            'r':'1',
            's':'Marked'
        },
        {
            "qt":"Quiz Title",
            "c_g":'Class/Grade',
            "c":"Course",
            "t_n":'Tutors Name',
            'q_a':"6 of 10",
            'r':'4',
            's':'Pending'
        },
        {
            "qt":"Quiz Title",
            "c_g":'Class/Grade',
            "c":"Course",
            "t_n":'Tutors Name',
            'q_a':"6 of 10",
            'r':'4',
            's':'Pending'
        },
        {
            "qt":"Quiz Title",
            "c_g":'Class/Grade',
            "c":"Course",
            "t_n":'Tutors Name',
            'q_a':"6 of 10",
            'r':'4',
            's':'Pending'
        },
    ]


    return ( <div className={styles.completedQuiz}>
        <div className={styles.heading}>
            <div>
                <h2>Upcomming Quizzes</h2>
                <p>All Published & Scheduled Quizzes List</p>
            </div>
            <div>
                <button style={{backgroundImage:`url(filtericon.png)`}}>Filters</button>
            </div>
        </div>


        <table>
                <tr className={styles.thead}>
                    <th>Quiz Title</th>
                    <th>Class/Grade</th>
                    <th>Course</th>
                    <th>Tutor's Name</th>
                    <th>Questions Attempted</th>
                    <th>Result</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>

                {tableContent.map((c)=>{
                    return(
                        <tr key={''} className={styles.tbody}>
                            <td>{c.qt}</td>
                            <td>{c.c_g}</td>
                            <td>{c.c}</td>
                            <td>{c.t_n}</td>
                            <td>{c.q_a}</td>
                            <td>{c.r}</td>
                            <td>{c.s}</td>
                            <td><button><img alt="" src='./actionEye.png'/></button></td>
                        </tr>
                    )
                })}
        </table>

    </div> );
}

export default CompletedQuiz;