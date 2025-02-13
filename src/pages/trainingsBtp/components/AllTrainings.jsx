import React from "react";
import TrainingList from "./TrainingList";
import Filter from "./Filter";

const AllTrainings = ({btpTrainings}) => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="">
        <p className="font-medium md:text-xl text-base text-left">
          Toutes les formations
        </p>
        <p className="font-normal md:text-base text-sm text-left text-gray-500">
          Accédez à des formations certifiantes, 100% en ligne et financées par
          les dispositifs incontournables, dont le DPC.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-4 gap-8 w-full">
        <Filter />
        <TrainingList btpTrainings={btpTrainings} />
      </div>
    </div>
  );
};

export default AllTrainings;
