"use client";
import { Sections, useResume } from "@/zustand/resume.zustand";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function Nav() {
  const searchParams = useSearchParams();
  const { setSection } = useResume();

  useEffect(() => {
    if (searchParams && searchParams.get("home") !== "true") {
      redirect("/resume?home=true");
    }
  }, []);

  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      <Link
        href={{ pathname: "/resume", query: { home: true } }}
        onClick={() => setSection(Sections.Home)}
      >
        Home
      </Link>

      <Link
        href={{ pathname: "/resume", query: { about: true } }}
        onClick={() => setSection(Sections.About)}
      >
        About
      </Link>

      <Link
        href={{ pathname: "/resume", query: { contact: true } }}
        onClick={() => setSection(Sections.Contact)}
      >
        Contact
      </Link>

      <Link
        href={{ pathname: "/resume", query: { experience: true } }}
        onClick={() => setSection(Sections.Experience)}
      >
        Experience
      </Link>
    </nav>
  );
}
