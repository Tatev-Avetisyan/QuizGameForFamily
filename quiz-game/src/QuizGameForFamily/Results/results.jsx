import React from'react'
import classes from '../QuizGame/QuizGame.module.css'


const Result = ({score,playAgain,showAnswers})=>{
    return(
    <div className ={classes.scoreBoard}>
        <div className={classes.score}>You scored {score} / 5 correct answers</div>
        <button className={classes.playAgainBtn} onClick={playAgain}> Play Again!</button>
        <button className={classes.showAnswers} onClick={showAnswers}> Show your Answers!</button>
    </div>
    )

}
export default Result