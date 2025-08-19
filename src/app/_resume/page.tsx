import React from "react";
// import dynamic from "next/dynamic";
import ResumeHeader from "@/app/_resume/_internal/header";
import Nav from "@/app/_resume/_internal/navFile";
import MainComponent from "@/app/_resume/_internal/mainComponent";

// const ResumeHeader = dynamic(() => import("@/app/resume/_internal/header"));
// const MainComponent = dynamic(
//   () => import("@/app/resume/_internal/mainComponent")
// );
// const Nav = dynamic(() => import("@/app/resume/_internal/navFile"));

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
