import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import QuizCard from "./QuizCard";
import "./Quiz.css";
import { useDispatch, useSelector } from "react-redux";
import { getQuiz } from "../../redux/Slice/quizSlice";
export default function Quiz({ type }) {
  const { questions } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [startQuiz, setStartQuiz] = useState(true);
  // console.log("Question", questions);
  return (
    <div className="quiz">
      <div className="quiz--wrapper">
        {startQuiz ? (
          <div className="quizQuestion">
            <button
              type="button"
              class="btn btn-primary btn-sm"
              onClick={() => {
                setStartQuiz(false);
                dispatch(getQuiz({ type: type }));
              }}
            >
              Start Quiz
            </button>
          </div>
        ) : questions.length != currentQuestion ? (
          <QuizCard
            key={questions[currentQuestion]._id}
            type={type}
            media={questions[currentQuestion].media}
            text={questions[currentQuestion].text}
            options={questions[currentQuestion].answers}
            setCurrentQuestion={setCurrentQuestion}
            currentQuestion={currentQuestion}
            setScore={setScore}
            score={score}
            length={questions.length}
          />
        ) : (
          <div className="quizQuestion">
            <Link to="/Learning/Result">
              <button type="button" class="btn btn-primary btn-sm"
              >
                View Result
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
