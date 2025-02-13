import React, { useEffect, useState } from "react";
import { MdOutlineFilterList } from "react-icons/md";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import CustomCheckBox from "../../../components/CustomCheckBox";
import {
  aidFilters,
  btpJobFilters,
  durationFilters,
  medicalJobFilters,
} from "../../../assets/data/filterItems";
import { useLocation } from "react-router-dom";

const Filter = () => {/*
  const [showFilter, setShowFilter] = useState(false);
  const [toggleJob, setToggleJob] = useState(false);
  const [toggleAid, setToggleAid] = useState(false);
  const [toggleDuration, setToggleDuration] = useState(false);
  const [jobQuery, setJobQuery] = useState([]);
  const [aidQuery, setAidQuery] = useState([]);
  const [durationQuery, setDurationQuery] = useState([]);
  const [jobFilters, setJobFilters] = useState([]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/formations/categorie/sante") {
      setJobFilters(medicalJobFilters);
    } else {
      setJobFilters(btpJobFilters);
    }
  }, [location]);

  const handleFilterJobQuery = (query) => {
    if (jobQuery.includes(query)) {
      setJobQuery(jobQuery.filter((item) => item !== query));
    } else {
      setJobQuery([...jobQuery, query]);
    }
  };

  const handleFilterAidQuery = (query) => {
    if (aidQuery.includes(query)) {
      setAidQuery(aidQuery.filter((item) => item !== query));
    } else {
      setAidQuery([...aidQuery, query]);
    }
  };

  const handleFilterDurationQuery = (query) => {
    if (durationQuery.includes(query)) {
      setDurationQuery(durationQuery.filter((item) => item !== query));
    } else {
      setDurationQuery([...durationQuery, query]);
    }
  };

  return (
    <div className="flex flex-col lg:max-w-64 lg:min-w-64 gap-6">
      <div className="group flex flex-col w-full border border-black/70 cursor-pointer hover:bg-gray-100 transition-all duration-500 ease-in-out">
        <label
          htmlFor="select-tri"
          className="pt-4 px-4 w-full font-semibold cursor-pointer"
        >
          Trier par:
        </label>
        <div className="relative w-full flex items-center">
          <select
            id="select-tri"
            className="appearance-none text-black/85 w-full p-4 outline-none cursor-pointer group-hover:bg-gray-100 transition-all duration-500 ease-in-out"
          >
            <option value="">Les plus récents</option>
            <option value="">Les plus populaires</option>
          </select>
          <div className="absolute right-3 top-0 bottom-0 my-auto flex items-center justify-center pointer-events-none">
            <HiChevronDown className="w-5 h-5" />
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowFilter(!showFilter)}
        className="flex items-center w-full p-4 border border-black/70 cursor-pointer hover:bg-gray-100 transition-all duration-500 ease-in-out"
      >
        <span className="flex flex-row items-center gap-2">
          <MdOutlineFilterList className="w-5 h-5" />{" "}
          <span className="font-semibold">Filtrer par :</span>
        </span>
      </button>

      <div className={`${showFilter ? "flex" : "hidden"} flex-col gap-4`}>
        <div className="flex flex-col gap-4 pt-4 px-2 border-t border-gray-300">
          <button
            onClick={() => setToggleJob((prev) => !prev)}
            className="flex justify-between items-center w-full"
          >
            <span className="text-lg font-medium">Profession</span>
            <span className="flex items-center justify-center">
              {toggleJob ? (
                <HiChevronUp className="w-5 h-5" />
              ) : (
                <HiChevronDown className="w-5 h-5" />
              )}
            </span>
          </button>
          <div className={`${!toggleJob && "hidden"} flex flex-col gap-3 px-1`}>
            {jobFilters.map((item) => (
              <CustomCheckBox
                key={item}
                label={item}
                id={item}
                list={jobQuery}
                handleList={handleFilterJobQuery}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-4 px-2 border-t border-gray-300">
          <button
            onClick={() => setToggleAid((prev) => !prev)}
            className="flex justify-between items-center w-full"
          >
            <span className="text-lg font-medium">Financement</span>
            <span className="flex items-center justify-center">
              {toggleAid ? (
                <HiChevronUp className="w-5 h-5" />
              ) : (
                <HiChevronDown className="w-5 h-5" />
              )}
            </span>
          </button>
          <div className={`${!toggleAid && "hidden"} flex flex-col gap-3 px-1`}>
            {aidFilters.map((item) => (
              <CustomCheckBox
                key={item}
                label={item}
                id={item}
                list={aidQuery}
                handleList={handleFilterAidQuery}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-4 px-2 border-t border-gray-300">
          <button
            onClick={() => setToggleDuration((prev) => !prev)}
            className="flex justify-between items-center w-full"
          >
            <span className="text-lg font-medium">Durée</span>
            <span className="flex items-center justify-center">
              {toggleDuration ? (
                <HiChevronUp className="w-5 h-5" />
              ) : (
                <HiChevronDown className="w-5 h-5" />
              )}
            </span>
          </button>
          <div
            className={`${
              !toggleDuration && "hidden"
            } flex flex-col gap-3 px-1`}
          >
            {durationFilters.map((item) => (
              <CustomCheckBox
                key={item}
                label={item}
                id={item}
                list={durationQuery}
                handleList={handleFilterDurationQuery}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
*/};

export default Filter;
