import Nav from "./Nav";
import Footer from "./Footer";


const ConfirmedBooking = ({ bookingData }) => {

    return (
        <>
            <Nav />
            <div className="confirm-box">
                <p className="lead-text">Your booking is confirmed</p>
                <p>Date: {bookingData.date}</p>
                <p>Time: {bookingData.time}</p>
                <p>Guests: {bookingData.guests}</p>
                <p>Occasion: {bookingData.occasion}</p>
            </div>
            <Footer />
        </>
    )
};

export default ConfirmedBooking;