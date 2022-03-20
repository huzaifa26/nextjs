import styles from '../TeacherQuizComponents/CreateQuiz.module.css';

function Instructions(props) {
    return ( <div>
        <textarea style={{backgroundImage:'url(./instructionIcon.png)'}} placeholder='Type In Instruction For Quiz'></textarea>
    </div>
    );
}

export default Instructions;