import React, { useState } from "react";
import { seats } from "../components/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function SelectASeats({ setSelectedSeats }) {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [seatCounts, setSeatCounts] = useState({});

  const handleClick = (item) => {
    // Set the selected seat and ensure only one seat can be selected at a time
    setSelectedSeat(item);
  };

  const handleIncrement = (item) => {
    setSeatCounts((prevCounts) => {
      const newCount = (prevCounts[item] || 0) + 1;
      const updatedCounts = { ...prevCounts, [item]: newCount };
      setSelectedSeats({ [item]: newCount }); // Update only the currently selected seat
      return updatedCounts;
    });
  };

  const handleDecrement = (item) => {
    setSeatCounts((prevCounts) => {
      const newCount = (prevCounts[item] || 0) > 0 ? (prevCounts[item] || 0) - 1 : 0;
      const updatedCounts = { ...prevCounts, [item]: newCount };
      setSelectedSeats({ [item]: newCount }); // Update only the currently selected seat
      return updatedCounts;
    });
  };

  return (
    <div className="flex flex-col mx-4 items-center">
      <div className="p-6 mx-auto my-8 bg-white shadow-lg rounded-lg border-2 border-gray-500 w-full">
        <h1 className="text-2xl font-semibold text-gray-800 tracking-wide mb-4">
          Select Your Seat
        </h1>
        <div className="flex flex-row gap-4 w-full">
          {seats.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(item)}
              className={`flex flex-col text-sm border-2 border-gray-500 font-sans transition-all duration-300 rounded-md p-4 cursor-pointer w-full ${
                selectedSeat === item
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-green-600 hover:text-white"
              }`}
            >
              <span className="font-sans leading-loose text-sm text-amber-950 text-center">
                Type {item}
              </span>
              {selectedSeat === item && (
                <div
                  className={`flex items-center justify-between border-black border-2 bg-white mt-3 p-3 rounded-md w-full ${
                    selectedSeat === item ? "bg-white" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`text-lg font-semibold mx-auto ${
                      selectedSeat === item ? "text-gray-800" : "text-gray-800"
                    }`}
                  >
                    {seatCounts[item] || 0}
                  </div>
                  <div className="flex flex-col items-end">
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      className={`text-lg bg-gray-400 ${
                        selectedSeat === item ? "text-gray-800" : "text-gray-700"
                      } hover:text-gray-900 mb-1 cursor-pointer`}
                      aria-label="Increment Seat Count"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleIncrement(item);
                      }}
                    />
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className={`text-lg bg-gray-400 ${
                        selectedSeat === item ? "text-gray-800" : "text-gray-700"
                      } hover:text-gray-900 cursor-pointer`}
                      aria-label="Decrement Seat Count"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDecrement(item);
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
