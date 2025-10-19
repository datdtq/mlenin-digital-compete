import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import TheorySection from "@/components/TheorySection";
import ComparisonTable from "@/components/ComparisonTable";
import CaseStudies from "@/components/CaseStudies";
import PhilosophyApplication from "@/components/PhilosophyApplication";
import PolicyRecommendations from "@/components/PolicyRecommendations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Overview />
        <TheorySection />
        <ComparisonTable />
        <CaseStudies />
        <PhilosophyApplication />
        <PolicyRecommendations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
