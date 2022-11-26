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
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
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
          <Link to="products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
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
