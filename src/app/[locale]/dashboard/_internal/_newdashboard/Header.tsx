"use client";
import LangSwitcher from "@/lib/LangSwitcher";
import ThemeToggle from "@/lib/ThemeToggle";
import { Rocket } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Rocket className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold">AK PORTFOLIO</span>
          </div>
          <div className="md:hidden block space-x-4">
            <LangSwitcher />
            <ThemeToggle />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Features
            </Link>
            <Link
              href="#showcase"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Showcase
            </Link>
            <Link
              href="#community"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Community
            </Link>
            <Link
              href="#resources"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Resources
            </Link>
            <LangSwitcher />
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 top-full w-screen md:hidden pb-3 pt-2 space-y-1 bg-amber-100 shadow-lg z-50 rounded-xl">
            <Link
              href="#features"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              Features
            </Link>
            <Link
              href="#showcase"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              Showcase
            </Link>
            <Link
              href="#community"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              Community
            </Link>
            <Link
              href="#resources"
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              Resources
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
