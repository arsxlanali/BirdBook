import Podcast from "./Podcast";
import "./Podcast.css";

export default function MainPodcast() {
  const arr = [
    {
      id: "1",
      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1666983550/samples/sea-turtle.mp4",
      image:
        "https://res.cloudinary.com/dpxrvbatm/image/upload/v1667038059/pmrxq2bznoqd6hvx00of.jpg",
    },
    {
      id: "2",
      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1666983550/samples/sea-turtle.mp4",
      image:
        "https://res.cloudinary.com/dpxrvbatm/image/upload/v1667038059/pmrxq2bznoqd6hvx00of.jpg",
    },
    {
      id: "3",
      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1666983550/samples/sea-turtle.mp4",
      image:
        "https://res.cloudinary.com/dpxrvbatm/image/upload/v1667038059/pmrxq2bznoqd6hvx00of.jpg",
    },
    {
      id: "4",
      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1666983550/samples/sea-turtle.mp4",
      image:
        "https://res.cloudinary.com/dpxrvbatm/image/upload/v1667038059/pmrxq2bznoqd6hvx00of.jpg",
    },
  ];
  const podcast = arr.map((temp) => (
    <Podcast key={temp.id} link={temp.link} image={temp.image} id={temp.id} />
  ));
  return (
    <main className="podcast-div">
      <h1 className="article-title"> Podcast </h1>
      {podcast}
    </main>
  );
}
