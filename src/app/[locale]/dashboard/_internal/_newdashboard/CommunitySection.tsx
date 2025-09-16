"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React, { useState } from "react";

function CommunitySection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you for subscribing with ${email}! We'll keep you updated on ReactJS.`
    );
    setEmail("");
  };
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          Join the React Community
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with developers worldwide and contribute to the ecosystem
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <Card className="border-border p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6">
                Get the latest React news, updates, and best practices delivered
                to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
              <p className="text-muted-foreground mt-6">
                Join millions of developers building amazing things with React.
                Share your projects, get help, and learn from the community.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CommunitySection;
