import LangSwitcher from "@/lib/LangSwitcher";
import React, { ReactNode } from "react";

interface LayoutRootProps {
  children: ReactNode;
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children }) => {
  return (
    <div>
      <LangSwitcher />
      {children}
    </div>
  );
};

export default LayoutRoot;
