import { Link } from "react-router-dom";
import imgUrl from "../images/restaurant.jpg";

const Footer = () => {
    return (
        <div className="row fillGreen">
            <div className="col-2"></div>
            <footer className="col-8">
                <div className="doormat">
                    <img src={imgUrl} alt="Restaurant image" />
                    <ul className="p-text">
                        <li className="card-title-text">Doormat Navigation</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Menu</Link></li>
                        <li><Link to="/booking">Reservation</Link></li>
                        <li><Link to="/">Order Online</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                </div>
                <div className="contacts">
                    <ul className="p-text">
                        <li className="card-title-text">Contacts</li>
                        <li>XXXXXXX 123, Chichago</li>
                        <li>+1 234567890</li>
                        <li>littlelemon@restaurant.com</li>
                    </ul>
                </div>
                <div className="social">
                    <ul className="p-text">
                        <li className="card-title-text">Social</li>
                        <li><a href="www.facebook.com">Facebook</a></li>
                        <li><a href="www.instagram.com">Instagram</a></li>
                        <li><a href="twitter.com">Twitter</a></li>
                        <li><a href="www.youtube.com/">YouTube</a></li>
                    </ul>
                </div>
            </footer>
            <div className="col-2"></div>
        </div>
    )

};

export default Footer;