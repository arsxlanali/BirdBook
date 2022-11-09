import "./Sidebar.css"
import {Link, Outlet} from "react-router-dom";

export default function Sidebar(){
    return(
        <div className="sidebar body">
            <div className="div1">
            <h3 className="heading1">Learning Resources</h3>
                <div className="li1">
                    <Link to="Articles">
            <li>
                Articles
            </li></Link>
            <Link to="Videos">
            <li>Videos</li></Link>
            
            
            </div>
            </div>
            <div className="div2">
            <h3 className="heading1">Bird Quizzes</h3>
            <div className="li1">
                <Link to="Quiz">
            <li>Visual Quiz</li>
            <li>Geographical Quiz</li>
            </Link>
            
            
            </div>
            </div>
            <Outlet/>
        </div>
    )
}