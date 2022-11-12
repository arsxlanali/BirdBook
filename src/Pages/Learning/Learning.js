import { Outlet, Link } from "react-router-dom";
import "./Learning.css";

export default function Learning() {
  return (
    <div>
      <aside className="sidebar body">
        <div className="div1">
          <h3 className="heading1">Learning Resources</h3>
          <div className="li1">
            <Link to="/Learning/Articles">
              <li>Articles</li>
            </Link>
            <Link to="/Learning/Videos">
              <li>Videos</li>
            </Link>
            <Link to="/Learning/Podcast">
              <li>Podcast</li>
            </Link>
          </div>
        </div>
        <div className="div1">
          <h3 className="heading1">Bird Quizzes</h3>
          <div className="li1">
            <Link to="/Learning/VisualQuiz">
              <li>Visual Quiz</li>
            </Link>
            <Link to="/Learning/GeographicalQuiz">
              <li>Geographical Quiz</li>
            </Link>
            <Link to="/Learning/SoundQuiz">
              <li>Sound Quiz</li>
            </Link>
          </div>
        </div>
      </aside>
      <Outlet />
    </div>
  );
}
