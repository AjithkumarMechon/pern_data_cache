"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter, Globe } from "lucide-react";
import { Link } from "@/i18n/navigation";
import React, { useEffect, useState } from "react";

interface PageProps {
  locale: string;
}
const CommunitySection = ({ locale }: PageProps) => {
  const [formData, setFormData] = useState({
    email: "",
    customername: "",
    comment: "",
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Thank you for subscribing with ${formData.email}! We'll keep you updated on ReactJS.`
    );
    setFormData({ email: "", customername: "", comment: "" });
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black text-foreground">
          Join the Our Community
        </h2>
        <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
          Connect with our developers team and contribute to the ecosystem
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
                Get the latest news, updates, and best practices delivered to
                your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <Input
                    id="customername"
                    name="customername"
                    type="text"
                    placeholder="Mr. Abc"
                    value={formData.customername}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                  <Textarea
                    id="comment"
                    name="comment"
                    placeholder="Comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Feedback
                </Button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href={`https://www.linkedin.com/in/ajithkumar-anandan-developer/`}
                  target="_blank"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href={`mailto: ajithkumaranandandev@gmail.com`}
                  target="_blank"
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Mail className="h-6 w-6" />
                </Link>
                <Link
                  href="/dashboard/crud"
                  locale={locale}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Globe className="h-6 w-6" />
                </Link>
              </div>
              <p className="text-muted-foreground mt-6">
                Join millions of developers building amazing things with React.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CommunitySection;
