import Podcast from "./Podcast";
import "./Podcast.css";
import { useSelector } from "react-redux";
export default function MainPodcast() {
  var array = useSelector((state) => state.podcast.podcasts);
  const arr = [
    {
      id: "1",
      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1668085234/horse_fi7xnu.ogg",
      image:
        "https://res.cloudinary.com/dpxrvbatm/image/upload/v1667038059/pmrxq2bznoqd6hvx00of.jpg",
      name: "Bird Gathering",
      title: "The Past, Present, and Future of Purple Martins",
      date: "12 June 2022",
    },
    {
      id: "2",
      link: "https://res.cloudinary.com/dpxrvbatm/video/upload/v1668085234/horse_fi7xnu.ogg",
      image:
        "https://res.cloudinary.com/dpxrvbatm/image/upload/v1667038059/pmrxq2bznoqd6hvx00of.jpg",
      name: "Bird Gathering",
      title: "The Past, Present, and Future of Purple Martins",
      date: "12 June 2022",
    },
  ];
  const podcast = array.map((temp) => <Podcast {...temp} />);
  return (
    <main className="podcast-div">
      <h1 className="article-title"> Podcast </h1>
      {podcast}
    </main>
  );
}
