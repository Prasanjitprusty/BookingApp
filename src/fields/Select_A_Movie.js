import React, { useState } from "react";
import { movies } from "../components/data";

export default function SelectAMovie({ setSelectedMovie }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (item) => {
    setSelected(item);
    setSelectedMovie(item); // Pass selected movie to App.js
  };

  return (
    <div className="flex flex-col">
      <div className="mx-6 my-4 py-5 px-5 border-2 border-gray-500 rounded-md font-serif tracking-widest text-sm">
        <h1 className="text-xl tracking-widest font-semibold leading-tight">Select A Movie</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {movies.map((item, idx) => (
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
