import styles from './Questions.module.css';

function Questions(props) {

    const closeQuestionModal=()=>{
        props.closeQuestionModal();
    }

    return ( 
    <div className={styles.Questions}>
        <img alt="" onClick={closeQuestionModal} className={styles.crossImage}  src={'./crossIcon.png'}/>
            <div className={styles.headingDiv}>
                <img alt="" src={'./quizInstructionsIcon.png'}/>
                <h1>1 Of 8 Question</h1>
            </div>

            <div className={styles.questionArea}>
                <div><img alt="" src='./mcqQuestionMark.png'/><h2>Name of the Current American President?</h2></div>
                <div> <h2>A</h2> <h2>George Washington</h2> </div>
                <div> <h2>B</h2> <h2>James K. Polk</h2> </div>
                <div> <h2>C</h2> <h2>Joseph R. Biden Jr.</h2> </div>
                <div> <h2>D</h2> <h2>George Washington</h2> </div>
            </div>

            <div>
                <div className={styles.correctOption}>
                    <h2>Select Correct Answer</h2>
                    <div className={styles.options}>
                        <label>A <input type={'checkbox'}></input></label>
                        <label>B <input type={'checkbox'}></input></label>
                        <label>C <input type={'checkbox'}></input></label>
                        <label>D <input type={'checkbox'}></input></label>
                    </div>
                </div>
                <p className={styles.p}>Select all or possible options form the given ones</p>
            </div>

            <div className={styles.buttondiv}>
                <button>Back</button>
                <button>Skip</button>
                <button>Submit</button>
                <button>Next</button>
            </div>
    </div> );
}

export default Questions;