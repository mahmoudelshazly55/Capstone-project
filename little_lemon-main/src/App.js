import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import { useReducer, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from './api';
import ConfirmedBooking from './components/ConfirmedBooking';
import BookingPage from './components/BookingPage';

const timesReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE': {
      return action.newTimes;
    }
    case 'INITIALIZE': {
      return action.initialTimes;
    }
    default: {
      return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }
  }
}

const initialData = {
  date: "",
  time: "",
  guests: "",
  occasion: "Default"
}

function App() {
  const [bookingData, setBookingData] = useState(initialData);
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();

  const initializeTimes = () => {
    dispatch({ 
      type: "INITIALIZE",
      initialTimes: []
    });
  };

  const updateTimes = (date) => {
    const result = fetchAPI(date)
    dispatch({
      type: 'UPDATE',
      newTimes: result
    });
  };

  const submitForm = (formData) => {
      if (submitAPI(formData)) {
        navigate('/confirm')
      }
  }

  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              initializeTimes={initializeTimes}
              updateTimes={updateTimes}
              bookingData={bookingData}
              setBookingData={setBookingData}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path='/confirm'
          element={
            <ConfirmedBooking bookingData={bookingData} />
          }
        />
      </Routes>
  );
}

export default App;
