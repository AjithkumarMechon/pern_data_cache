import React from "react";
import Header from "@/app/[locale]/dashboard/_internal/Header";
import FeatureSection from "@/app/[locale]/dashboard/_internal/FeatureSection";
import CommunitySection from "@/app/[locale]/dashboard/_internal/CommunitySection";
import Footer from "@/app/[locale]/dashboard/_internal/Footer";
interface PageProps {
  params: { locale: string } | Promise<{ locale: string }>;
}
const Page = async ({ params }: PageProps) => {
  const { locale } = await params;

  return (
    <div className="bg-background text-foreground grid grid-cols-3 md:grid-cols-6 auto-rows-auto gap-4 items-center justify-items-center  mt-18">
      {/* Header */}
      <header className="z-50 w-full fixed top-0 bg-amber-100 h-18">
        <Header locale={locale} />
      </header>

      {/* Features Section */}
      <section id="features" className="py-4 col-span-full md:col-span-6">
        <FeatureSection />
      </section>

      {/* Community Section */}
      <section id="community" className="py-4 col-span-full md:col-span-6">
        <CommunitySection locale={locale} />
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-2 col-span-full md:col-span-6 bg-amber-100 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default Page;
