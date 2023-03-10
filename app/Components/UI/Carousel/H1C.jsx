import React from "react";

function H1C({ children }) {
  return (
    <h1 className="dark:text-white text-8xl md:text-7xl allEM:text-5xl allT:text-3xl">
      {children}
    </h1>
  );
}

export default H1C;
