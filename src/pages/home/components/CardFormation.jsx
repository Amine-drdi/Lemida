import { NavLink } from "react-router-dom";

export default function FormationCard({ name, description, image, link }) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-8">
      <img className="w-full h-48 object-cover rounded-xl" src={image} alt={name} />
      <div className="px-4 py-2">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <NavLink to={link} className="text-blue-500 hover:underline mt-2 block">En savoir plus</NavLink>
      </div>
    </div>
  );
}