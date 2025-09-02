import React from "react";
import LangSwitcher from "@/lib/LangSwitcher";

function layoutRoot({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <LangSwitcher />
      {children}
    </div>
  );
}

export default layoutRoot;
