import Articles from "./Articles";
import "./Articles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getArticles } from "../../redux/Slice/articleSlice";
import { useEffect } from "react";
export default function MainArticles() {
  var array = useSelector((state) => state.article.articles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getArticles());
  }, [dispatch]);
  const article = array.map((temp) => <Articles {...temp} />);
  return (
    <main className="article-div">
      <h1 className="article-title"> Latest Articles</h1>
      {article}
    </main>
  );
}
