import React from "react";

export const Card = ({ header, description, detail }) => {
  return (
    <div className="bg-white h-full bg-red rounded-md drop-shadow-lg">
      <h1 className="text-xs">{header}</h1>

      <p className="text-xs">{description}</p>

      <span>{detail}</span>
    </div>
  );
};