import React from "react";
import { FaRocket } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { HiOutlineChartSquareBar } from "react-icons/hi";

const ServiceData = [
  {
    id: 1,
    heading: "Our Mission",
    text: "Empower every founder to launch a standout brand—no design degree required.",
    icon: <FaRocket className="text-6xl" />,
  },
  {
    id: 2,
    heading: "Our Vision",
    text: "A world where professional‑quality logos are as accessible as a cup of coffee.",
    icon: <HiOutlineChartSquareBar className="text-6xl" />,
  },
  {
    id: 3,
    heading: "Our Values",
    text: "Integrity, creativity, and relentless innovation guide everything we build.",
    icon: <GrValidate className="text-6xl" />,
  },
];
export const Mission_services = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ServiceData.map(({ id, heading, text, icon }) => (
            <div key={id} className="space-y-3 text-center p-5">
              <div className="flex justify-center">{icon}</div>
              <h1 className="text-xl font-bold">{heading}</h1>
              <p className="size-auto ml-2 mr-2">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
