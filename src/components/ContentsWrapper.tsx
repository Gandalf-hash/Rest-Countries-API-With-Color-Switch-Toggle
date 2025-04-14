import React from "react";

function ContentsWrapper({ children }: { children: React.ReactNode }) {
  return <div className="px-4 md:px-12 py-[2rem] flex flex-col">{children}</div>;
}

export default ContentsWrapper;
