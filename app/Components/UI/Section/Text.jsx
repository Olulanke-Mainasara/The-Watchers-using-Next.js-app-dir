import React from "react";

function Text({ children, position }) {
  return (
    <section className={`w-1/2 h-full flex items-center ${position} allIL:justify-center allEMT:w-screen allEMT:h-2/5 allEMT:py-14`}>
      <div className="w-4/5 allLM:h-[555px] flex flex-col justify-center gap-7 dark:text-white">
        {children}
      </div>
    </section>
  );
}

export default Text;
