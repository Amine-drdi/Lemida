import React from "react";
import CardJuridique from "../../../components/CardJuridique";

const TrainingList = ({ trainings }) => {
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-3">
      {/*trainings.slice(1, 8).map((training) => (
        <CardJuridique
          key={training.id}
          imageUrl={training.image}
          title={training.title}
          instructors={training.instructors}
          duration={training.duration}
        />
      ))*/}
      {trainings.map((training) => (
        <CardJuridique
          key={training.id}
          imageUrl={training.image}
          title={training.title}
          instructors={training.instructors}
          duration={training.duration}
        />
      ))}
      {/*trainings.map((training) => (
        <CardJuridique
          key={training.id}
          imageUrl={training.image}
          title={training.title}
          instructors={training.instructors}
          duration={training.duration}
        />
      ))*/}
    </div>
  );
};

export default TrainingList;
