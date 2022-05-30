import styles from '../TeacherQuizComponents/CreateQuiz.module.css';
import {useRef} from "react";

function Instructions(props) {

    // const [instruction,setInstruction]=useState();

    return ( <div>
        <textarea onChange={(e)=>{props.getInstruction(e.target.value)}} style={{backgroundImage:'url(./instructionIcon.png)'}} placeholder='Type In Instruction For Quiz'></textarea>
    </div>
    );
}

export default Instructions;