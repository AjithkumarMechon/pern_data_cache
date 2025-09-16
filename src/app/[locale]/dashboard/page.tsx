import React from "react";
// import dynamic from "next/dynamic";
import ResumeHeader from "@/app/[locale]/dashboard/_internal/header";
import Nav from "@/app/[locale]/dashboard/_internal/navFile";
import MainComponent from "@/app/[locale]/dashboard/_internal/mainComponent";
import { Link } from "@/i18n/navigation";
import NewDashboard from "./_internal/NewDashboard";
interface PageProps {
  params: { locale: string } | Promise<{ locale: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { locale } = await params;
  return (
    <>
      <NewDashboard />
      {/* <ResumeHeader />
      <Nav />
      <MainComponent /> */}
      <Link
        href="/dashboard/crud"
        locale={locale}
        className="fixed bottom-4 right-4"
      >
        CRUD
      </Link>
    </>
  );
};

export default Page;
