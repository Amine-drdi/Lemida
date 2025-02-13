import React from "react";
import Card from "../../../components/Card";

const Recent = ({ trainings }) => {
  return (
    <div className="grid 2xl:grid-cols-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {trainings.slice(4, 8).map((training) => (
        <Card
          key={training.id}
          imageUrl={training.image}
          title={training.title}
          instructors={training.instructors}
          duration={training.duration}
        />
      ))}
    </div>
  );
};

export default Recent;
