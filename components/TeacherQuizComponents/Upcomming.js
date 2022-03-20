import styles from './Upcomming.module.css'

function Upcomming() {

    const tableContent=[
        {
            "qt":"Quiz Title",
            "c_g":'Class/Grade',
            "c":"Course",
            "t_n":'Tutors Name',
            'sd_t':"20-10-2021 | 10:00 PM",
            'ed_t':'21-10-2021 | 10:00 PM'
        },
    ]


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

        <table>
                <tr className={styles.thead}>
                    <th>Quiz Title</th>
                    <th>Class/Grade</th>
                    <th>Course</th>
                    <th>Start Data & Time</th>
                    <th>End Data & Time</th>
                    <th>Actions</th>
                </tr>

                {tableContent.map((c)=>{
                    return(
                        <tr key={''} className={styles.tbody}>
                            <td>{c.qt}</td>
                            <td>{c.c_g}</td>
                            <td>{c.c}</td>
                            <td>{c.sd_t}</td>
                            <td>{c.ed_t}</td>
                            <td>
                                <button><img alt="" src='./actionEye.png'/></button>
                                <button><img alt="" src='./pen.png'/></button>
                                <button><img alt="" src='./firstdraft.png'/></button>
                                <button><img alt="" src='./chain.png'/></button>
                            </td>
                        </tr>
                    )
                })}
        </table>
    </div> 
    );
}

export default Upcomming;