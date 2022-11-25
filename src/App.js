import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useContext } from "react";
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

import HomeAdmin from "./Pages/Admin/home/Home";
import Login from "./Pages/Admin/login/Login";
import List from "./Pages/Admin/list/List";
import Single from "./Pages/Admin/single/Single";
import New from "./Pages/Admin/new/New";
import NetworkService from "./network-service";
import { ToastContainer, toast } from "react-toastify";
import { productInputs, userInputs } from "./formSource";
import "react-toastify/dist/ReactToastify.css";
NetworkService.setupInterceptorsRequest();
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="Admin">
            <Route index element={<HomeAdmin />} />
            <Route path="login" element={<Login />} />
            <Route path="addquiz" element={<AddQuiz />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
        <NavBar />
        <Routes>
          {" "}
          <Route path="/" element={<Home />} exact />
          <Route path="Learning" element={<Learning />}>
            <Route path="Articles" element={<MainArticles />} />
            <Route path="Videos" element={<MainVideos />} />
            <Route path="Podcast" element={<MainPodcast />}></Route>
            <Route path="VisualQuiz" element={<Quiz />} />
            <Route path="GeographicalQuiz" element={<Quiz />} />
            <Route path="SoundQuiz" element={<Quiz />} />
          </Route>
          <Route path="Maps" element={<ReactGoogleMaps />} />
          <Route path="Forum" element={<Forum />} />
          <Route path="Ecomerce" element={<Ecomerce />} />
          <Route path="BirdRecognition" element={<BirdRecognition />} />
        </Routes>
      </Router>
      <ToastContainer autoClose={4000} limit={1} />
    </>
  );
}

export default App;
