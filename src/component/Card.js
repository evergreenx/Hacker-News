import React from "react";

export const Card = ({ header, description, detail, url, time, kids }) => {
  return (
    <div className=" px-4 py-10  rounded-xl relative shadow-lg mt-8 lg:w-full md:w-full bg-white ">
      <a href={url} className="text-xs font-bold">
        {header}
      </a>

      <p className="text-xxs text-ever font-normal leading-4 mt-3">
        {description}
      </p>

      <span>{detail}</span>

      <div className="text-xxs font-normal text-gray-500 mt-3 flex">
        <img
          src="https://res.cloudinary.com/evergreenx/image/upload/v1626707121/clock_4_ekqynm.svg"
          alt=""
          className="mr-1"
        />
        {new Date(time * 1000).toLocaleDateString("en-US", {
          hour: "numeric",
          minute: "numeric",
        })}{" "}
        | {`${kids && kids.length > 0 ? kids.length : 0}`} comments
      </div>


      



    </div>
  );
};
