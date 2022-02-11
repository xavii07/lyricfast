import React from "react";

const Error = ({ mensaje }) => {
  return (
    <p className="alert alert-primary text-center text-primary">{mensaje}</p>
  );
};

export default Error;
