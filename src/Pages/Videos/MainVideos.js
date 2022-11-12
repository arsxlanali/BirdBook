import Videos from "./Videos";
import "./Videos.css";

export default function MainVideos() {
  const arr = [
    {
      _id: "1",
      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1666983550/samples/sea-turtle.mp4",
      title: "Birds-of-Paradise Project Introduction",
    },
    {
      _id: "2",
      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1666983550/samples/sea-turtle.mp4",
      title: "Birds-of-Paradise Project Introduction",
    },
    {
      _id: "3",

      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1666983550/samples/sea-turtle.mp4",
      title: "Birds-of-Paradise Project Introduction",
    },
    {
      _id: "4",
      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1666983550/samples/sea-turtle.mp4",
      title: "Birds-of-Paradise Project Introduction",
    },
  ];
  const article = arr.map((temp) => <Videos {...temp} />);
  return (
    <main className="video-div">
      <h1 className="video-title"> Videos </h1>
      {article}
    </main>
  );
}
