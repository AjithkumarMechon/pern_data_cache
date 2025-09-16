import React from "react";
import Header from "./_newdashboard/Header";
import HeroSection from "./_newdashboard/HeroSection";
import FeatureSection from "./_newdashboard/FeatureSection";
import ShowcaseSection from "./_newdashboard/ShowcaseSection";
import CommunitySection from "./_newdashboard/CommunitySection";
import Footer from "./_newdashboard/Footer";
import LangSwitcher from "@/lib/LangSwitcher";
import ThemeToggle from "@/lib/ThemeToggle";

function NewDashboard() {
  return (
    <div className="bg-background text-foreground grid grid-cols-3 md:grid-cols-6 auto-rows-auto gap-4 items-center justify-items-center">
      {/* Header */}
      <header className="z-50 w-full fixed top-0 bg-amber-100 h-24">
        <div className="flex justify-end gap-4 p-4">
          <Header />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-4 col-span-full mt-24 md:col-span-6">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section id="features" className="py-4 col-span-full md:col-span-6">
        <FeatureSection />
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-4 col-span-full md:col-span-6">
        <ShowcaseSection />
      </section>

      {/* Community Section */}
      <section id="community" className="py-4 col-span-full md:col-span-6">
        <CommunitySection />
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-4 col-span-full md:col-span-6">
        <Footer />
      </footer>
    </div>
  );
}

export default NewDashboard;
