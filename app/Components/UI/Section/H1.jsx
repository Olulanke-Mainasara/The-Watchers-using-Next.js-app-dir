import React from "react";

function H1({ children }) {
  return (
    <h1 className="text-5xl 2xl:text-6xl md:text-3xl allEM:text-4xl allEM:text-center allT:text-3xl">
      {children}
    </h1>
  );
}

export default H1;
