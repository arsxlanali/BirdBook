import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ArticleIcon from "@mui/icons-material/Article";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import QuizIcon from "@mui/icons-material/Quiz";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Slice/loginSlice";
import { adminLogout } from "../../redux/Slice/loginSlice";
import { useNavigate } from "react-router-dom";
import { getQuiz } from "../../redux/Slice/quizSlice";
const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="sidebar-admin">
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">Quiz</p>
          <Link to="/admin/addquiz" style={{ textDecoration: "none" }}>
            <li>
              <QuizIcon className="icon" />
              <span>Add Quiz</span>
            </li>
          </Link>
          <Link
            to="/admin/listquiz"
            style={{ textDecoration: "none" }}
            onClick={() => {
              const data = {
                type: "visual",
              };
              dispatch(getQuiz(data));
            }}
          >
            <li>
              <PersonOutlineIcon className="icon" />
              <span>List Quiz</span>
            </li>
          </Link>
          <p className="title">PODACTS</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Add Podcasts</span>
          </li>
          <li>
            <PodcastsIcon className="icon" />
            <span>List Podcasts</span>
          </li>
          <p className="title">ARTICLES</p>
          <li>
            <DocumentScannerIcon className="icon" />
            <span>Add Articles</span>
          </li>
          <li>
            <ArticleIcon className="icon" />
            <span>List Articles</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li
            onClick={() => {
              dispatch(logOut());
              dispatch(adminLogout());
              localStorage.clear();
              navigate("/");
            }}
          >
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
