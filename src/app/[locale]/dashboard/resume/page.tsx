import React from "react";
// import dynamic from "next/dynamic";
import ResumeHeader from "@/app/[locale]/dashboard/resume/_internal/header";
import Nav from "@/app/[locale]/dashboard/resume/_internal/navFile";
import MainComponent from "@/app/[locale]/dashboard/resume/_internal/mainComponent";

const Page: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <Nav />
      <MainComponent />
    </>
  );
};

export default Page;
