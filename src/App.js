import React, { useState } from "react";
import "./App.css";
import SelectAMovie from "./fields/Select_A_Movie";
import SelectASlot from "./fields/Select_A_Slot";
import SelectASeats from "./fields/Select_A_Seats";
import LastBooking from "./fields/LastBooking";

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState({});

  const handleBooking = () => {
    if (!selectedMovie || !selectedSlot || Object.keys(selectedSeats).length === 0) {
      alert("Please select a movie, slot, and at least one seat.");
      return;
    }

    fetch("https://bookmyshow-backend-krge.onrender.com/api/v1/newUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie: selectedMovie,
        time: selectedSlot,
        seats: selectedSeats,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response:", data);
        alert("Booking successful!");
      })
      .catch((error) => {
        console.error("Booking failed:", error);
        alert("Booking failed. Please try again.");
      });
  };

  return (
    <div className="flex flex-col p-5 space-y-5">
      <h1 className="rounded-e-full max-w-fit py-4 px-10 ms-6 bg-violet-200">Book My Show</h1>
      <div className="flex justify-between items-start">
        <div>
          <SelectAMovie setSelectedMovie={setSelectedMovie} />
          <SelectASlot setSelectedSlot={setSelectedSlot} />
          <SelectASeats setSelectedSeats={setSelectedSeats} />
          <button 
            className="bg-teal-500 text-white p-6 hover:bg-teal-800 mb-16 ms-4  rounded-full"
            onClick={handleBooking}
          >
            Book My Show
          </button>
        </div>
        <div className="flex-2 mt-4 rounded-sm ml-5">
          <LastBooking />
        </div>
      </div>
    </div>
  );
}

export default App;
