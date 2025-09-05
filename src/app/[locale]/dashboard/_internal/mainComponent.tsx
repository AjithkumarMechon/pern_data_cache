"use client";
import { useResume } from "@/zustand/resume.zustand";
import React from "react";
import FieldPage from "./field/home";

function MainComponent() {
  const { section } = useResume();
  return (
    <div className="mt-6 ">
      <div className="mt-4 p-4 border border-gray-300 rounded-lg">
        <FieldPage field={section} />
      </div>
    </div>
  );
}

export default MainComponent;
