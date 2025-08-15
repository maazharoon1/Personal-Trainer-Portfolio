import React, { useEffect, useState } from "react";


const TypeWriterUi = ({ text, speed = 30 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <div className="p-4 rounded-2xl shadow-lg max-w-xl 
      bg-gradient-to-r from-gray-800 via-gray-900 to-black 
      border border-gray-700 text-gray-100 font-medium tracking-wide">
      <p className="whitespace-pre-line ">{displayedText}</p>
    </div>
  );
};

export default TypeWriterUi;
