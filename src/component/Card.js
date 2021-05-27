import React from "react";

export const Card = ({ header, description, detail }) => {
  return (
    <div className="h-32 p-6 rounded-xl relative shadow-xl	z-10 mt-8 lg:w-2/4 sm:w-full">
      <h1 className="text-xs font-bold">{header}</h1>

      <p className="text-xxs text-ever font-normal leading-4 mt-3">{description}</p>

      <span>{detail}</span>
    </div>
  );
};
