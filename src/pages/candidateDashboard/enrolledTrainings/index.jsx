import React from "react";
import Card from "./components/Card";

const EnrolledTrainings = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <p className="py-4 text-xl font-medium text-gray-800">Mes formations</p>
      <div className="flex flex-col gap-4">
        <Card />
      </div>
    </div>
  );
};

export default EnrolledTrainings;
