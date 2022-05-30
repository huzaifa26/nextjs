import styles from "./CreateQuiz.module.css";
import { useEffect, useRef, useState,useMemo } from "react";
import Main from "../CreateQuiz/Main";
import Instructions from "../CreateQuiz/Instructions";
import Questions from "../CreateQuiz/Questions";
import QuizSetting from "../CreateQuiz/QuizSetting";
import { useDispatch, useSelector } from "react-redux";
import { makeQuiz,getAllQuizez,setAllQuizNewState,getQuizQuestion,deleteFromIndex,EmptyGetQuizQuestion } from "../../redux/actions/quiz";

function CreateQuiz(props) {
  const dispatch = useDispatch();
  const [getQuestionFromRedux,setGetQuestionFromRedux]=useState([]);

  const questionState=useSelector((state)=>{return state.setSingleQuestino})

  // useEffect(()=>{
  //   setGetQuestionFromRedux(questionState);
  // },[questionState])

  useEffect(()=>{
    return ()=>{
      console.log(1)
      dispatch(setAllQuizNewState([]));
    }
  },[])

  const [mainComponent, setMainComponent] = useState(true);
  const [instructionComp, setInstructionComp] = useState(false);
  const [questionComp, setQuestionComp] = useState(false);
  const [quizSettingComp, setquizSettingComp] = useState(false);
  const [getQuestions,setGetQuestions]=useState([]);
  let [counter,setCounter]=useState(0);
  let k=0;

  const [array,setArray]=useState([0]);

  const nextHandler = () => {
    if (mainComponent) {
      setMainComponent(false);
      setInstructionComp(true);
    }

    if (instructionComp) {
      setInstructionComp(false);
      setQuestionComp(true);
    }

    if (questionComp) {
      setQuestionComp(false);
      setquizSettingComp(true);
    }
  };

  const backHandler=()=>{
    if (mainComponent) {
    }

    if (instructionComp) {
      setInstructionComp(false);
      setMainComponent(true);
    }

    if (questionComp) {
      setQuestionComp(false);
      setInstructionComp(true);
    }

    if (quizSettingComp) {
      setquizSettingComp(false);
      setQuestionComp(true);
    }
  }

  const [doChange,setDoChange]=useState(false)
  let newItem;
  const [id,setId]=useState();

  const removeDiv=(clickid)=>{
    setCounter(counter-1)
    setId(clickid);
    setDoChange(true)
  }

  const addQuestionHandler=()=>{
      setArray((prevState)=>{
        return[...prevState,prevState[prevState.length-1]+1]
      })
      newItem=<Questions getQuestionsintoArray={getQuestionsintoArray} key={array[array.length-1]} id={array[array.length-1]} Length={0} removeDiv={removeDiv}/>
      console.log(newItem);
      setGetQuestionFromRedux([...getQuestionFromRedux,newItem]);
      setCounter(counter+1)
  }

  if(doChange){
      let a=[...array];
      a=a.filter(element=>element !== id);
      setArray(a);  
      let b =[...getQuestionFromRedux];
      b=b.filter(element=>{
        if(+element.key!==id){
          return element
        }
      });
      setGetQuestionFromRedux(b);
      setDoChange(false);
  }

  const getQuestionsintoArray=(question)=>{
    setGetQuestions([...getQuestions,question])
  }



  const [main,setMain]=useState();
  const [instruction,setInstruction]=useState();
  

  const getMainTitle=(title)=>{
    setMain({...main,title:title})
  }

  const getMainClass=(className)=>{
    setMain({...main,className})
  }

  const getMainCourse=(course)=>{
    setMain({...main,course})
  }

  const getMainQuizTime=(time)=>{
    setMain({...main,time})
  }

  const getInstruction=(instruction)=>{
    setInstruction(instruction)
  }

  const [showPublishModal,setPublishModal]=useState(false);

  const publishHandler=()=>{
    setPublishModal(!showPublishModal);
  }

  const [startDate,setStartData]=useState();
  const [endDate,setEndData]=useState();
  const [startTime,setStartTime]=useState();
  const [endTime,setEndTime]=useState();

  const quiz = useSelector((state) => {return state.quiz});

  const [quizbar,setQuizBar]=useState();
  const [RandomizeNo,setRandomizeNo]=useState();
  const [quizTimer,setQuizTimer]=useState();
  const [qutoAdvance,setAutoAdvance]=useState();

  const getQuizBar=(data)=>{
    setQuizBar(data)
  }

  const getRandomizeQuestion=(data)=>{
    setRandomizeNo(data)
  }

  const getQuizTimer=(data)=>{
    setQuizTimer(data)
  }

  const getAutoAdvance=(data)=>{
    setAutoAdvance(data)
  }

  const publishQuizHandler=()=>{
      let quizTimeInfo={
        id:quiz.length,
        className:main.className,
        course:main.course,
        time:main.time,
        title:main.title,
        instruction,
        startDate,
        endDate,
        startTime,
        endTime,
        quizbar,
        RandomizeNo,
        quizTimer,
        qutoAdvance,
        questions:getQuestions    
      }
      dispatch(makeQuiz(quizTimeInfo));
      dispatch(getAllQuizez(quizTimeInfo));
  }

  return (
    <div className={styles.CreateQuiz}>

      {showPublishModal && <div className={styles.publishModal}>
          <h2>Publish Quiz</h2>
            <div>
                <div>
                  <label>Start Date</label>
                  <input onChange={(e)=>setStartData(e.target.value)} type={"date"} name="startDate"></input>
                </div>
                <div>
                  <label>End Date</label>
                  <input onChange={(e)=>setEndData(e.target.value)} type={"date"} name="endDate"></input>
                </div>
            </div>
            <div>
                <div>
                  <label>Start Time</label>
                  <input onChange={(e)=>setStartTime(e.target.value)} type={"time"} name="startTime"></input>
                </div>
                <div>
                  <label>End Time</label>
                  <input onChange={(e)=>setEndTime(e.target.value)} type={"time"} name="endTime"></input>
                </div>
            </div>
          <div>
            <button onClick={publishHandler}>Cancel</button>
            <button onClick={publishQuizHandler}>Publish</button>
          </div>
      </div>}

      <div className={styles.heading}>
        <div>
          <h2>New Quiz</h2>
          <p>Test IQ</p>
        </div>
      </div>

      <div className={styles.quizSection}>
          {mainComponent && <Main getMainTitle={getMainTitle} getMainClass={getMainClass} getMainCourse={getMainCourse} getMainQuizTime={getMainQuizTime}/>}
          {instructionComp && <Instructions getInstruction={getInstruction}/>}

          {getQuestionFromRedux.map((q,id)=> {
              console.log(getQuestionFromRedux);
            // if(k<counter) {
              // k++;
              return q;
            // }
          })}

          {quizSettingComp && <QuizSetting getQuizBar={getQuizBar} getRandomizeQuestion={getRandomizeQuestion} getQuizTimer={getQuizTimer} getAutoAdvance={getAutoAdvance}/>}

        <div className={styles.buttonDiv}>
          <button onClick={backHandler}>Back</button>

          {questionComp && (
            <button onClick={addQuestionHandler} className={styles.addQuestion}>Add Question</button>
          )}

          {!quizSettingComp && <button onClick={nextHandler}>Next</button>}
          {quizSettingComp && <button onClick={publishHandler}>Publish</button>}
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
