import styles from './Completed.module.css';

function Completed(props) {
    const tableContent=[
        {
            "qt":"Quiz Title",
            "c_g":'Class/Grade',
            "c":"Course",
            'c_t':'21-10-2021 | 10:00pm'
        },
    ]

    return ( 
    <div className={styles.Completed}>
        <div className={styles.heading}>
            <div>
                <h2>Completed Quizzes</h2>
                <p>All Completed Quizzes List</p>
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
                    <th>Completed on & TIme</th>
                    <th>Actions</th>
                </tr>

                {tableContent.map((c)=>{
                    return(
                        <tr key={''} className={styles.tbody}>
                            <td>{c.qt}</td>
                            <td>{c.c_g}</td>
                            <td>{c.c}</td>
                            <td>{c.c_t}</td>
                            <td>
                                <button><img alt="" src='./actionEye.png'/></button>
                                <button><img alt="" src='./pen.png'/></button>
                                <button><img alt="" src='./clock.png'/></button>
                                <button><img alt="" src='./rpen.png'/></button>
                            </td>
                        </tr>
                    )
                })}
        </table>

    </div>
    );
}

export default Completed;