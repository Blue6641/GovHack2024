import React from "react";

const Demark = ({ text }) => {
  return (
    <div>
      <div className="my-8 flex items-center">
        <div className="mx-2 flex-grow border-t border-primary-main"></div>
        <span className="px-4 text-3xl font-bold text-primary-main">
          {text}
        </span>
        <div className="mx-2 flex-grow border-t border-primary-main"></div>
      </div>
    </div>
  );
};

export default Demark;
