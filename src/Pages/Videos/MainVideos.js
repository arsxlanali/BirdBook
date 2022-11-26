import Videos from "./Videos";
import "./Videos.css";
import { useSelector } from "react-redux";

export default function MainVideos() {
  var array = useSelector((state) => state.video.videos);
  const article = array.map((temp) => <Videos {...temp} />);
  return (
    <main className="video-div">
      <h1 className="video-title"> Videos </h1>
      {article}
    </main>
  );
}
