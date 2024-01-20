import React from "react";

const Card = ({ cardName , smallSize , largeSize }) => {

  return (
    <div className="flex justify-between w-80 rounded-lg p-4 bg-transparent shadow-2xl border-dashed border-2">
  
      <div className="flex gap-4">
        <div>{largeSize}</div>
        <div>{smallSize}</div>
      </div>
      
      <div>{cardName}</div>
    </div>
  );
};

export default Card;
