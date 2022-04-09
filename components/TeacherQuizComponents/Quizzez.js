import styles from "./Quizzez.module.css";
function Quizzez(props) {

    const tableContent=[
        {
            "qt":"Quiz Title",
            "c_g":'Class/Grade',
            "c":"Subject",
            "t_n":'Tutors Name',
            'q_s':"Scheduled - Published",
        },
    ]

    return ( 
    <div className={styles.Quizzez}>
        <div className={styles.heading}>
            <div>
                <h2>Quizzes</h2>
                <p>All Tutor's Quizzes</p>
            </div>
            <div>
                <button style={{backgroundImage:`url(filtericon.png)`}}>Filters</button>
            </div>
        </div>
        <table>
                <tr className={styles.thead}>
                    <div>
                    <th>Quiz Title</th>
                    <th>Class/Grade</th>
                    <th>Subject</th>
                    <th>Tutor's Name</th>
                    <th>Quiz Status</th>
                    <th>Actions</th>
                    </div>
                </tr>

                {tableContent.map((c)=>{
                    return(
                        <tr key={''} className={styles.tbody}>
                            <td>{c.qt}</td>
                            <td>{c.c_g}</td>
                            <td>{c.c}</td>
                            <td>{c.t_n}</td>
                            <td>{c.q_s}</td>
                            <td>
                                <button><img alt="" src='./actionEye.png'/></button>
                                <button><img alt="" src='./actionIcon.png'/></button>
                            </td>
                        </tr>
                    )
                })}
        </table>
    </div> );
}

export default Quizzez;