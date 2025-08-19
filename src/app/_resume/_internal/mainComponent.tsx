"use client";
import { useResume } from "@/zustand/resume.zustand";
import React from "react";
import FieldPage from "./field/home";

function MainComponent() {
  const { section } = useResume();

  return (
    <div>
      <div
        style={{
          marginTop: "1rem",
          padding: "1rem",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <FieldPage field={section} />
      </div>
    </div>
  );
}

export default MainComponent;
