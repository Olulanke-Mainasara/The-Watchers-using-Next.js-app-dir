import React from "react";

function P({ children }) {
  return (
    <p className="text-base 2xl:text-2xl md:text-base allEM:text-base allT:text-base">
      {children}
    </p>
  );
}

export default P;
