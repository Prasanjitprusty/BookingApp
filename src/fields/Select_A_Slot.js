import React, { useState } from "react";
import { slots } from "../components/data";

export default function SelectASlot({ setSelectedSlot }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (item) => {
    setSelected(item);
    setSelectedSlot(item); // Pass selected slot to App.js
  };

  return (
    <div className="flex flex-col">
      <div className="mx-6 my-4 py-5 px-5 border-2 border-gray-500 rounded-md font-serif tracking-widest text-sm">
        <h1 className="text-xl tracking-widest font-semibold leading-tight">Select a Time Slot</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {slots.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(item)}
              className={`text-sm font-sans transition-colors transition-opacity border-2 border-gray-400 rounded-md p-5 cursor-pointer ${
                selected === item ? "bg-green-600" : "hover:bg-green-600"
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
