import { Link } from "react-router-dom";
import NavBar from "./NavBar.js";

export default function Header() {


    return (
       <div className="header">
           <div className="header-text">
                <Link to="/">
                    <h3 className="header-title">
                        Your Home
                    </h3>
                </Link>
            </div>

            <div className="navbar">
                <NavBar />
            </div>

       </div>
    );
 }