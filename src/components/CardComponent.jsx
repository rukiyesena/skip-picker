import React from 'react';

const Card = ({ title, buttonText, onButtonClick, children, selected }) => {
  return (
    <div
      onClick={onButtonClick}
      className={`rounded-2xl w-full overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 
        skip-card ${selected ? "selected" : ""}`}
    >
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-gray-600 text-sm mb-4">
        {children}
      </div>
      {buttonText && (
        <button
          onClick={onButtonClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
