import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

function ShowcaseSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          Built with ReactJS
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          {` Discover what you can create with React's powerful ecosystem`}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Web Applications */}
        <Card className="border-border">
          <CardHeader>
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1753a159-b0a7-4b42-9861-2b37b17ab21d.png"
              alt="Modern web application dashboard with data visualization and interactive components"
              width={800}
              height={192}
              className="w-full h-48 object-cover rounded-lg"
              style={{
                width: "100%",
                height: "12rem",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
              priority
            />
          </CardHeader>
          <CardContent>
            <CardTitle>Web Applications</CardTitle>
            <CardDescription className="mt-2">
              Build complex, data-driven web applications with smooth
              interactions and real-time updates.
            </CardDescription>
          </CardContent>
        </Card>
        {/* Mobile Apps */}
        <Card className="border-border">
          <CardHeader>
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a5066d5a-900f-4b5b-a5a3-fd89179a3964.png"
              alt="React Native mobile app interface with modern design and intuitive navigation"
              width={800}
              height={192}
              className="w-full h-48 object-cover rounded-lg"
              style={{
                width: "100%",
                height: "12rem",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
              priority
            />
          </CardHeader>
          <CardContent>
            <CardTitle>Mobile Applications</CardTitle>
            <CardDescription className="mt-2">
              Create native mobile apps for iOS and Android using React Native
              with shared React knowledge.
            </CardDescription>
          </CardContent>
        </Card>

        {/* UI Libraries */}
        <Card className="border-border">
          <CardHeader>
            <Image
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c6ca3b4d-014d-4d33-a7cc-258aaf3f197e.png"
              alt="Collection of reusable UI components with consistent design and interactive elements"
              width={800}
              height={192}
              className="w-full h-48 object-cover rounded-lg"
              style={{
                width: "100%",
                height: "12rem",
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
              priority
            />
          </CardHeader>
          <CardContent>
            <CardTitle>UI Component Libraries</CardTitle>
            <CardDescription className="mt-2">
              Develop reusable component libraries that maintain consistency
              across your entire application ecosystem.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ShowcaseSection;
