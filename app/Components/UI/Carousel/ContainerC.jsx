import React from "react";

function ContainerC({ children, id }) {
  return (
    <section className="w-full h-screen overflow-hidden flex flex-col gap-10 items-center justify-center text-center allIL:h-auto allLM:my-64 allEMT:my-40" id={id}>
      {children}
    </section>
  );
}

export default ContainerC;
