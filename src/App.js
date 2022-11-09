
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home/Home';
import Learning from './Pages/Learning/Learning'
import ReactGoogleMaps from './Pages/Maps/Maps'
import Forum from './Pages/Forum/Forum'
import Ecomerce from './Pages/Ecomerce/Ecomerce'
import BirdRecognition from './Pages/BirdRecognition/BirdRecognition'
import Articles from './Pages/Articles/Articles';
import Quiz from './Pages/Quiz/Quiz'
import Videos from './Pages/Videos/Videos'
import MainArticles from './Pages/Articles/MainArticle';
// import SignUp from './Pages/SignUp/SignUp';
// import LogIn from './Pages/LogIn/LogIn';

function App() {
  return (
    <div>
      {/* <NavBar/> */}
      {/* <Home/> */}
      {/* <SignUp/> */}
      {/* <LogIn/> */}
      <Router>
      <NavBar/> 
       <Routes>
        <Route  path="/" element={<Home/>} exact/>
        <Route  path="/Learning" element={<Learning/>}>
          <Route  path="/Learning" element={<MainArticles/>} />
          <Route  path="Videos" element={<Videos/>} />
          <Route  path="Quiz" element={<Quiz/>} />
        </Route>
        <Route  path="/Maps" element={<ReactGoogleMaps/>}/>
        <Route  path="/Forum" element={<Forum/>} />
        <Route  path="/Ecomerce" element={<Ecomerce/>} />
        <Route  path="/BirdRecognition" element={<BirdRecognition/>} />


      </Routes>
     </Router>
      
      
      


    </div>
  );
}

export default App;
