import React from "react";
import { useSelector } from "react-redux";

const Studentdata = () => {
  const { name, age } = useSelector((state) => state.user);
  return (
    <div className="student-data">
      <h1>
        Your name {name} aged {age} has been added to student system.
        <br /> You may now exit.
      </h1>
    </div>
  );
};

export default Studentdata;
