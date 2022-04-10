import styles from './Upcomming.module.css'

function Upcomming() {

    const tableContent = [
      {
        qt: "Quiz Title",
        c: "Subject",

        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",

        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",

        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",
        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",
        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",
        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",
        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",
        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",
        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",
        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
      {
        qt: "Quiz Title",
        c: "Subject",
        sd_t: "20-10-2021 | 10:00 PM",
        ed_t: "21-10-2021 | 10:00 PM",
      },
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
                            <td>{c.qt}</td>
                            <td>{c.c}</td>
                            <td>{c.sd_t}</td>
                            <td>{c.ed_t}</td>
                            <td>{"Timer"}</td>
                        </tr>
                    )
                })}
        </table>
    </div> 
    );
}

export default Upcomming;