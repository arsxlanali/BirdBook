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
import Result from "./Pages/Quiz/Result";
import MainVideos from "./Pages/Videos/MainVideos";
import MainArticles from "./Pages/Articles/MainArticle";
import AddQuiz from "./Pages/Admin/AddQuiz/AddQuiz";
import MainPodcast from "./Pages/Podcast/MainPodcast";
import BirdRecognition from "./Pages/BirdRecognition/BirdRecognition";
import MainBuy from "./Pages/Buy/BuyMain";
import Sell from "./Pages/Sell/Sell";

import Admin from "./Pages/Admin/Admin";
import HomeAdmin from "./Pages/Admin/home/Home";
import ListQuiz from "./Pages/Admin/ListQuiz/ListQuiz";

import List from "./Pages/Admin/list/List";
import Single from "./Pages/Admin/single/Single";
import New from "./Pages/Admin/new/New";
import NetworkService from "./network-service";
import { ToastContainer, toast } from "react-toastify";
import { productInputs, userInputs } from "./formSource";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
NetworkService.setupInterceptorsRequest();
function App() {
  // const user = localStorage.getItem("Token");
  const User = useSelector((state) => state.login.user);
  return (
    <>
      <Router>
        {User == 5150 ? (
          <>
            <Admin />
            <Routes>
              <Route path="Admin">
                <Route index element={<HomeAdmin />} />
                <Route path="addquiz" element={<AddQuiz />} />
                <Route path="listquiz" element={<ListQuiz />} />
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
                    element={
                      <New inputs={productInputs} title="Add New Product" />
                    }
                  />
                </Route>
              </Route>
            </Routes>
          </>
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} exact />
              <Route path="Learning" element={<Learning />}>
                <Route path="Articles" element={<MainArticles />} />
                <Route path="Videos" element={<MainVideos />} />
                <Route path="Podcast" element={<MainPodcast />}></Route>
                <Route path="VisualQuiz" element={<Quiz type={"visual"} />} />
                <Route
                  path="GeographicalQuiz"
                  element={<Quiz type={"simple"} />}
                />
                <Route path="SoundQuiz" element={<Quiz type={"audio"} />} />
                <Route path="Result" element={<Result />} />
              </Route>
              <Route path="Ecomerce" element={<Ecomerce />}>
                <Route path="Buy" element={<MainBuy />} />
                <Route path="Sell" element={<Sell />} />
              </Route>
              <Route path="Maps" element={<ReactGoogleMaps />} />
              <Route path="Forum" element={<Forum />} />

              <Route path="BirdRecognition" element={<BirdRecognition />} />
            </Routes>
          </>
        )}
      </Router>
      <ToastContainer autoClose={4000} limit={1} />
    </>
  );
}

export default App;
