import styles from "./QuizActivity.module.css";

function QuizActivity(props) {

    const activityContent=[
        {
            title:'Quiz title',
            cg:'Class/Grade',
            Course:'Course',
            startTime_Data:'Start Date & Time',
            endTime_date:'End Date & Time',
            total_student:'Total Students',
            total_addended:"Total Attended",
            result_in_per:'Results in %',
            status:'Upcomming'
        },
        {
            title:'Quiz title',
            cg:'Class/Grade',
            Course:'Course',
            startTime_Data:'Start Date & Time',
            endTime_date:'End Date & Time',
            total_student:'Total Students',
            total_addended:"Total Attended",
            result_in_per:'Results in %',
            status:'Upcomming'
        },
    ]

    return ( 
    <div className={styles.quizActivity}>
        <div className={styles.heading}>
            <div>
                <h2>Quiz Activity</h2>
                <p>Recent Quiz Activity</p>
            </div>
            <div>
                <button style={{backgroundImage:`url(filtericon.png)`}}>Filters</button>
            </div>
        </div>

        
            {activityContent.map((content)=>{
                return(
                    <div key={''} className={styles.activity}>
                        <p>{content.title}</p>
                        <p>{content.cg}</p>
                        <p>{content.Course}</p>
                        <p>{content.startTime_Data}</p>
                        <p>{content.endTime_date}</p>
                        <p>{content.total_student}</p>
                        <p>{content.total_addended}</p>
                        <p>{content.result_in_per}</p>
                        <button>{content.status}</button>
                    </div>
                )
            })}
    </div>
    );
}

export default QuizActivity;