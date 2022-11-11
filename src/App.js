import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Learning from "./Pages/Learning/Learning";
import ReactGoogleMaps from "./Pages/Maps/Maps";
import Forum from "./Pages/Forum/Forum";
import Ecomerce from "./Pages/Ecomerce/Ecomerce";
import BirdRecognition from "./Pages/BirdRecognition/BirdRecognition";
import Articles from "./Pages/Articles/Articles";
import Quiz from "./Pages/Quiz/Quiz";
import Videos from "./Pages/Videos/Videos";
import MainArticles from "./Pages/Articles/MainArticle";
import AdminSideBar from "./Pages/Admin/AdminSideBar";
import AddQuiz from "./Pages/Admin/AddQuiz/AddQuiz";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="Learning" element={<Learning />}>
            <Route path="Articles" element={<MainArticles />} />
            <Route path="Videos" element={<Videos />} />
            <Route path="Quiz" element={<Quiz />} />
          </Route>
          <Route path="Maps" element={<ReactGoogleMaps />} />
          <Route path="Forum" element={<Forum />} />
          <Route path="Ecomerce" element={<Ecomerce />} />
          <Route path="BirdRecognition" element={<BirdRecognition />} />
          <Route path="Admin" element={<AdminSideBar />}>
            <Route path="AddQuiz" element={<AddQuiz />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
