import { Outlet, Link } from "react-router-dom";
import "./AdminSideBar.css";

export default function Learning() {
  return (
    <aside className="sidebar body">
      <div>
        <div className="div1">
          <h3 className="heading1">Learning Resources</h3>
          <div className="li1">
            <Link to="/Learning">
              <li>Add Articles</li>
            </Link>
            <Link to="Videos">
              <li>Videos</li>
            </Link>
          </div>
        </div>
        <div className="div2">
          <h3 className="heading1">Bird Quizzes</h3>
          <div className="li1">
            <Link to="Quiz">
              <li>Visual Quiz</li>
              <li>Geographical Quiz</li>
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </aside>
  );
}
