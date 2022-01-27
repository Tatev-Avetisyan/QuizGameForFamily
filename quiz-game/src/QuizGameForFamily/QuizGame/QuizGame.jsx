import React,{useState,useEffect} from 'react';
import questionBank from '../QuestionBank/questionBank';
import QuestionBox from '../questionBox/questionBox';
import Result from '../Results/results';
import QuestionBoxResult from '../QuestionBoxResult/QuestionBoxResult';

import classes from './QuizGame.module.css'

function QuizGame(){
    const [question,setQuestion]= useState([]);
    const [score,setScore]= useState(0);
    const [responses,setResponses]= useState(0);
    const [showAns,setShowAns]= useState(false);
    const [selectedAnswers,setSelectedAnswers]= useState([]);
    

    const getQuestions=()=>{
        questionBank().then(data=>{
            setQuestion(data)
        })
    }
    
    const computeAnswer=(answer,correctAnswer)=>{
        setSelectedAnswers([...selectedAnswers,answer])
        console.log(selectedAnswers);
        if(answer === correctAnswer){
            setScore(score+1)
        }
        setResponses(responses<5?responses+1:5)
    }
    
    const playAgain=()=>{
        getQuestions();
        setResponses(0);
        setScore(0);
        setShowAns(false);
        setSelectedAnswers([]);
    }
    
    useEffect(()=>{
        getQuestions(question)
    },[])

    return(
        <section className={classes.main}>
        <div className={classes.background}>
        <div className={classes.container}>
            <div className={classes.header}> <p className={classes.title}>Quiz Game for Family</p></div>
            <div className={classes.bodyPart}>{question.length>0 &&
            responses<5 && 
            question.map(({question,answers,correct,questionId})=>{
            return <QuestionBox 
            key = {questionId} 
            question = {question} 
            options = {answers}
            selected = {answer=>computeAnswer(answer,correct) }/>})}
            
            {showAns && 
            question.map(({question,answers,correct,questionId},index)=>{
            return <QuestionBoxResult 
            key = {questionId} 
            correct={correct}
            options = {answers}
            question={question}
            selected = {selectedAnswers[index]}
            />})}
            {showAns && <button className={classes.playAgain} onClick={playAgain}>Play Again</button>}
            
             </div>
            {responses===5 && !showAns?<Result score = {score} showAnswers={()=>{setShowAns(true)}} playAgain={playAgain}></Result>:null}
        </div>
        </div>
        </section>
    )
}

export default QuizGame