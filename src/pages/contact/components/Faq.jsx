import React, { useState } from "react";
import { faq } from "../../../assets/data/faq";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm bg-primary">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex gap-2 items-center justify-between w-full p-8 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-md text-left font-medium w-11/12 text-white">
          {title}
        </p>
        <div className="flex items-center justify-center w-8 h-8 border border-orange-400 rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-orange-400 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-8 pt-0">
          <p className="text-gray-400">{children}</p>
        </div>
      )}
    </div>
  );
};

const Faq = (props) => {
  return (
    <div className="w-full flex flex-col gap-12 max-w-2xl px-mobile_padding">
      <div className="flex w-full">
        <h2 className="md:text-3xl text-xl font-bold tracking-tight text-primary text-center w-full">
          FAQ
        </h2>
      </div>

      <div className="space-y-4">
        {faq.map((item) => (
          <Item title={item.question} key={item.question}>
            {item.answer}
          </Item>
        ))}
      </div>
    </div>
  );
};

export default Faq;
