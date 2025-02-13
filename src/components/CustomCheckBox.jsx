import React from "react";
import { MdCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const CustomCheckBox = ({ id, list, handleList, label }) => {
  return (
    <div className="flex gap-2">
      <input
        type="checkbox"
        id={id}
        checked={list.includes(label)}
        className="hidden"
        onChange={() => handleList(label)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer flex items-start gap-1 text-sm"
      >
        {list.includes(label) ? (
          <MdCheckBox className="w-5 h-5 min-w-5 min-h-5" />
        ) : (
          <MdOutlineCheckBoxOutlineBlank className="w-5 h-5 min-w-5 min-h-5" />
        )}
        {label}
      </label>
    </div>
  );
};

export default CustomCheckBox;
