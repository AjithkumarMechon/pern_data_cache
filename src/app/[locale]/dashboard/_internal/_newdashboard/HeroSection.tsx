import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground">
          Build Modern Web Apps with{" "}
          <span className="text-primary">ReactJS</span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
          {` Create dynamic, high-performance user interfaces with the world's
              most popular JavaScript library for building component-based
              applications.`}
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
