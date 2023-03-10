import React from "react";

function SImage({ children }) {
  return (
    <section className="w-1/2 h-full flex items-center justify-center allEMT:w-screen allEMT:h-[440px]">
      <div className="relative w-3/5 max-w-[575px] h-3/4 allLM:h-[555px] allEMT:h-full allIL:w-3/4 allM:max-w-[310px]">
        {children}
      </div>
    </section>
  );
}

export default SImage;
