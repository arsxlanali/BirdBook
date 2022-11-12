import Articles from "./Articles";
import "./Articles.css";

export default function MainArticles() {
  const arr = [
    {
      _id: "1",
      title: "What is the capital of USA?",
      published: "March 29, 2021",
      author: "Mindy Weisberger",
      text: "The 2022 FIM MotoGP World Championship was the premier class of the 74th F.I.M. Road Racing World Championship season. Fabio Quartararo came into the season as the defending World Champion. Ducati secured the constructors' championship, with the factory Ducati Lenovo Team securing the teams' championship and factory rider Francesco Bagnaia achieving the riders' championship. In total, seven different riders and five manufacturers won Grands Prix during the season. As the only manufacturer without a victory, the season saw Honda finish in last place of the manufacturers' standings for the first time in the modern MotoGP era.",
      image:
        "https://res.cloudinary.com/dpxrvbatm/image/upload/v1667038059/pmrxq2bznoqd6hvx00of.jpg",
    },
    {
      _id: "2",
      title: "What is the capital of USA?",
      published: "March 29, 2021",
      author: "Mindy Weisberger",
      text: "The 2022 FIM MotoGP World Championship was the premier class of the 74th F.I.M. Road Racing World Championship season. Fabio Quartararo came into the season as the defending World Champion. Ducati secured the constructors' championship, with the factory Ducati Lenovo Team securing the teams' championship and factory rider Francesco Bagnaia achieving the riders' championship. In total, seven different riders and five manufacturers won Grands Prix during the season. As the only manufacturer without a victory, the season saw Honda finish in last place of the manufacturers' standings for the first time in the modern MotoGP era.",
      image:
        "https://res.cloudinary.com/dpxrvbatm/image/upload/v1667038059/pmrxq2bznoqd6hvx00of.jpg",
    },
    {
      _id: "3",
      title: "What is the capital of USA?",
      published: "March 29, 2021",
      author: "Mindy Weisberger",
      text: "The 2022 FIM MotoGP World Championship was the premier class of the 74th F.I.M. Road Racing World Championship season. Fabio Quartararo came into the season as the defending World Champion. Ducati secured the constructors' championship, with the factory Ducati Lenovo Team securing the teams' championship and factory rider Francesco Bagnaia achieving the riders' championship. In total, seven different riders and five manufacturers won Grands Prix during the season. As the only manufacturer without a victory, the season saw Honda finish in last place of the manufacturers' standings for the first time in the modern MotoGP era.",
      image:
        "https://res.cloudinary.com/dpxrvbatm/image/upload/v1667038059/pmrxq2bznoqd6hvx00of.jpg",
    },
  ];
  const article = arr.map((temp) => <Articles {...temp} />);
  return (
    <main className="article-div">
      <h1 className="article-title"> Latest Articles</h1>
      {article}
    </main>
  );
}
