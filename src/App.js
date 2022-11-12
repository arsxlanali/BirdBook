import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Learning from "./Pages/Learning/Learning";
import ReactGoogleMaps from "./Pages/Maps/Maps";
import Forum from "./Pages/Forum/Forum";
import Ecomerce from "./Pages/Ecomerce/Ecomerce";

import Quiz from "./Pages/Quiz/Quiz";
import MainVideos from "./Pages/Videos/MainVideos";
import MainArticles from "./Pages/Articles/MainArticle";
import AdminSideBar from "./Pages/Admin/AdminSideBar";
import AddQuiz from "./Pages/Admin/AddQuiz/AddQuiz";
import MainPodcast from "./Pages/Podcast/MainPodcast";
import BirdRecognition from "./Pages/BirdRecognition/BirdRecognition";
import NetworkService from "./network-service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
NetworkService.setupInterceptorsRequest();

function App() {
  // const navigation = useNavigate();

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="Learning" element={<Learning />}>
            <Route path="Articles" element={<MainArticles />} />
            <Route path="Videos" element={<MainVideos />} />
            <Route path="Podcast" element={<MainPodcast />}></Route>
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
      <ToastContainer autoClose={4000} limit={1} />
    </>
  );
}

export default App;
