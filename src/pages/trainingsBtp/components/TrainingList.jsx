import React from "react";
import Card from "../../../components/CardBtp";

const TrainingList = ({ btpTrainings }) => {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
      {/*btpTrainings.slice(1, 8).map((training) => (
        <Card
          key={training.id}
          imageUrl={training.image}
          title={training.title}
          instructors={training.instructors}
          duration={training.duration}
          id={training.id}

        />
      ))*/}
      {btpTrainings.map((training) => (
        <Card
          key={training.id}
          imageUrl={training.image}
          title={training.title}
          instructors={training.instructors}
          duration={training.duration}
          id ={training.id}

        />
      ))}
      {/*btpTrainings.map((training) => (
        <Card
          key={training.id}
          imageUrl={training.image}
          title={training.title}
          instructors={training.instructors}
          duration={training.duration}
          id ={training.id}

        />
      ))*/}
    </div>
  );
};

export default TrainingList;
