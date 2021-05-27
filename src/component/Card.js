import React from "react";

export const Card = ({ header, description, detail }) => {
  return (
    <div className="h-full p-6 rounded-xl relative shadow-2xl	z-10 mt-8 lg:w-2/4 sm:w-full">
      <h1 className="text-lg">{header}</h1>

      <p className="text-xs text-ever font-normal">{description}</p>

      <span>{detail}</span>
    </div>
  );
};
