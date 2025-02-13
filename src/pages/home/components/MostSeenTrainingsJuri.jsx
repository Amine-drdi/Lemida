import Card from "../../../components/CardJur";

const MostSeenTrainings = ({ title, description, trainings }) => {
  return (
    <section className="flex flex-col gap-10 md:px-desktop_padding sm:px-tablet_padding px-mobile_padding mb-16">
      <div className="flex justify-center gap-1 items-center shrink-0 self-stretch">
        <div className="">
          <p className="font-bold md:text-3xl text-xl text-center">{title}</p>
          <p className="mt-6 md:max-w-4xl text-lg text-gray-600 text-center">
            {description}
          </p>
        </div>
      </div>
      <div className=" flex justify-center">
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 xl:max-w-[1400px]">
          {trainings.slice(0, 4).map((training) => (
            <Card
              key={training.id}
              imageUrl={training.image}
              title={training.title}
              instructors={training.instructors}
              duration={training.duration}
              id={training.id}

            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostSeenTrainings;
