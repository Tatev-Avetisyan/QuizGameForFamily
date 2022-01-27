import React from 'react';
import classes from '../QuizGame/QuizGame.module.css'


const QuestionBoxResult=({question,options,selected,correct})=>{
    return(
        <div className = {classes.questionBox}>
            <div className = {classes.question}>{question}</div>
            {options.map((item,index)=>{
                return <button key = {index} 
                className={
                    item ===correct?
                    classes['correct'] :
                    item===selected? classes['incorrect']:
                    classes['answerBtn'] } >{item}</button>
            })}

        </div>
    )
}

export default QuestionBoxResult