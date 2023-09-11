import logo from "../images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="row">
            <div className="col-2"></div>
            <nav className="col-8">
                <img src={logo} alt="Logo" width="147.5px" height="40px" />
                <ul className="nav-bar">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/booking">Reservation</Link></li>
                    <li><Link to="/">Order Online</Link></li>
                    <li><Link to="/">Login</Link></li>
                </ul>
                <div className="nav-toggle"><FontAwesomeIcon icon={faBars} size="1x" /></div>
            </nav>
            <div className="col-2"></div>
        </div>
    )
};

export default Nav;