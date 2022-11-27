import "./Quiz.css";
import { useSelector } from "react-redux";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { useDispatch } from "react-redux";
import { clearQuiz } from "../../redux/Slice/podcastSlice";
import { useNavigate } from "react-router-dom";
function Result() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const score = useSelector((state) => state.quiz.score);
  const total = useSelector((state) => state.quiz.total);
  return (
    <main className="quiz">
      <div className="quizQuestion">
        <div className="featuredChart">
          <CircularProgressbar
            value={(score / total) * 100}
            text={(score / total) * 100}
            strokeWidth={10}
          />
        </div>
        <p className="title">
          Total score {score} from {total}
        </p>
        <p className="amount">
          {score}/{total}
        </p>
        <button
          type="button"
          class="btn btn-primary btn-sm"
          style={{ position: "absolute", right: 50, bottom: 50, width: 100 }}
          onClick={() => {
            dispatch(clearQuiz());
            navigate(-1);
          }}
        >
          Finish
        </button>
      </div>
    </main>
  );
}
export default Result;
