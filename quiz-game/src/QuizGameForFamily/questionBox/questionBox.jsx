import React,{useState} from 'react';
import classes from '../QuizGame/QuizGame.module.css'


const QuestionBox=({question,options,selected})=>{
    const[answer,setAnswer]=useState(options);
    const [isChosen,setIsChosen]= useState(false);


    return(
        <div className = {classes.questionBox}>
            <div className = {classes.question}>{question}</div>
            {answer.map((item,index)=>{
                return <button key = {index} className={classes.answerBtn} onClick={()=>{
                    if (isChosen) {return}
                    setAnswer([item])
                    selected(item)
                    setIsChosen(true)
                    
                }}>{item}</button>
            })}

        </div>
    )
}

export default QuestionBox