import Nav from "./Nav";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

const BookingPage = ({ availableTimes, initializeTimes, updateTimes, bookingData, setBookingData, submitForm }) => {
    return(
        <>
            <Nav />
            <BookingForm  availableTimes={availableTimes}
              initializeTimes={initializeTimes}
              updateTimes={updateTimes}
              bookingData={bookingData}
              setBookingData={setBookingData}
              submitForm={submitForm}/>
            <Footer />
        </>
    )
}

export default BookingPage;