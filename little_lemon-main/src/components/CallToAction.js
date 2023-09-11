import restaurantFood from "../images/restauranfood.jpg";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="row fillGreen">
      <div className="col-2"></div>
      <header className="col-8">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Link to="/booking">
          <button class="pillBtn">Reserve a Table</button>
        </Link>
        <img src={restaurantFood} alt="restaurant food" id="restaurantFood" />
      </header>
      <div className="col-2"></div>
    </div>
  );
};

export default CallToAction;
