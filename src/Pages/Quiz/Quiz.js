import React from "react"
import { Link, useLocation } from "react-router-dom";

import QuizCard from "./QuizCard"
import './Quiz.css'
import data from "./data"
export default function Quiz() {
    const location = useLocation().state;
        const quizType = location.stateParam;
    React.useEffect(function (){
        if(quizType === 1){
            //Visualquiz API CAll
        }else if(quizType === 2){
            //Geographical quiz API call
        }
        console.log("quiz type"+quizType);
    });

    const [userAnswer, setUserAnswer] = React.useState({

    });
    const [counter, setCounter] = React.useState(0);
    const [passing,setPassing] = React.useState(0);

    function handleCounter() {

        if(counter >= 9){
            //checking correct answers after question are completed
            let correctAnswer = 0;
            for(let i=0; i<=9 ; i++){
                if(userAnswer[`${i}`] === data[`${i}`].answers[0].text){
                    if (data[`${i}`].answers[0].correct){
                        correctAnswer++;
                    }
                }else if(userAnswer[`${i}`] === data[`${i}`].answers[1].text){
                    if (data[`${i}`].answers[0].correct){
                        correctAnswer++;
                    }
                }else if(userAnswer[`${i}`] === data[`${i}`].answers[2].text){
                    if (data[`${i}`].answers[0].correct){
                        correctAnswer++;
                    }
                }else if(userAnswer[`${i}`] === data[`${i}`].answers[3].text){
                    if (data[`${i}`].answers[0].correct){
                        correctAnswer++;
                    }
                }else{
                    console.log("error");
                }
                console.log("correctAnswer"+correctAnswer)
            }
            setPassing(correctAnswer)
        }
        setCounter(counter + 1); //increasing counter
    }

    const quizElements = data.map((question, index) => {
        return (
            <QuizCard
                key={question._id}
                // image={question.image}
                index={index}
                text={question.text}
                options={question.answers}
                answer={userAnswer}
                setAnswer={setUserAnswer}
            />
        );
    });
    console.log(userAnswer);

    return (
        <div className="quiz">
            <div className="quiz--wrapper">
                {quizElements[counter]}
                {counter < 10 ? <button className="btn--AddCounter" onClick={handleCounter}>
                    Next
                </button> :
                    <div className="quizQuestion"> 
                        <Link to="/learning/Result" 
                            state= {{stateParam: passing}}
                            className="quiz--resultBtn">
                            Click to see Results
                        </Link>
                        
                    </div>}
            </div>
        </div>
    );
}