import { Outlet, Link } from "react-router-dom";
import "./Learning.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getArticles } from "../../redux/Slice/articleSlice";
import { getVideos } from "../../redux/Slice/videoSlice";
import { getpodcasts } from "../../redux/Slice/podcastSlice";
export default function Learning() {
  const [state, setState] = useState([true, false, false, false, false, false]);
  const [headingBack, setHeadingBack] = useState([true, false]);
  const styles = { color: "#8426FC", fontWeight: "600" };
  const preStyle = { color: "#464646" };
  const headStlye = { backgroundColor: "#8426FC" };
  const preHeadstyle = { backgroundColor: "#969696" };
  // console.log("log", state[1]);
  const dispatch = useDispatch();
  // const { articles } = useSelector((state) => state.article);
  return (
    <div>
      <aside className="sidebar body">
        <div className="div1">
          <h3
            className="heading1"
            style={headingBack[0] ? headStlye : preHeadstyle}
          >
            Learning Resources
          </h3>
          <div className="li1">
            <Link
              to="/Learning/Articles"
              onClick={() => {
                dispatch(getArticles());
              }}
            >
              <li
                style={state[0] ? styles : preStyle}
                onClick={() => {
                  setState([true, false, false, false, false, false]);
                  setHeadingBack([true, false]);
                }}
              >
                Articles
              </li>
            </Link>
            <Link
              to="/Learning/Videos"
              onClick={() => {
                dispatch(getVideos());
              }}
            >
              <li
                style={state[1] ? styles : preStyle}
                onClick={() => {
                  setState([false, true, false, false, false, false]);
                  setHeadingBack([true, false]);
                }}
              >
                Videos
              </li>
            </Link>
            <Link
              to="/Learning/Podcast"
              onClick={() => {
                dispatch(getpodcasts());
              }}
            >
              <li
                style={state[2] ? styles : preStyle}
                onClick={() => {
                  setState([false, false, true, false, false, false]);
                  setHeadingBack([true, false]);
                }}
              >
                Podcast
              </li>
            </Link>
          </div>
        </div>
        <div className="div1">
          <h3
            className="heading1"
            style={headingBack[1] ? headStlye : preHeadstyle}
          >
            Bird Quizzes
          </h3>
          <div className="li1">
            <Link to="/Learning/VisualQuiz">
              <li
                style={state[3] ? styles : preStyle}
                onClick={() => {
                  setState([false, false, false, true, false, false]);
                  setHeadingBack([false, true]);
                }}
              >
                Visual Quiz
              </li>
            </Link>
            <Link to="/Learning/GeographicalQuiz">
              <li
                style={state[4] ? styles : preStyle}
                onClick={() => {
                  setState([false, false, false, false, true, false]);
                  setHeadingBack([false, true]);
                }}
              >
                Geographical Quiz
              </li>
            </Link>
            <Link to="/Learning/SoundQuiz">
              <li
                style={state[5] ? styles : preStyle}
                onClick={() => {
                  setState([false, false, false, false, false, true]);
                  setHeadingBack([false, true]);
                }}
              >
                Sound Quiz
              </li>
            </Link>
          </div>
        </div>
      </aside>
      <Outlet />
    </div>
  );
}
