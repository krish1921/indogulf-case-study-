import { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ExecutiveOverview from './components/ExecutiveOverview';
import BrandPillars from './components/BrandPillars';
import StrategicPrioritization from './components/StrategicPrioritization';
import FISCalculator from './components/FISCalculator';
import FieldMarketingEngine from './components/FieldMarketingEngine';
import RoadmapTimeline from './components/RoadmapTimeline';
import LongTermMilestones from './components/LongTermMilestones';
import ResearchLibrary from './components/ResearchLibrary';
import EvidenceVsAssumptions from './components/EvidenceVsAssumptions';
import ValueCreation from './components/ValueCreation';
import FinancialData from './components/FinancialData';
import SourcesSection from './components/SourcesSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar activeSection={activeSection} />
      <main>
        <HeroSection />
        <section id="overview"><ExecutiveOverview /></section>
        <section id="brand-strategy"><BrandPillars /></section>
        <section id="channel-strategy"><StrategicPrioritization /></section>
        <section id="farmer-intelligence"><FISCalculator /></section>
        <section id="field-marketing"><FieldMarketingEngine /></section>
        <section id="roadmap"><RoadmapTimeline /></section>
        <section id="long-term"><LongTermMilestones /></section>
        <section id="financials"><FinancialData /></section>
        <section id="research"><ResearchLibrary /></section>
        <section id="evidence"><EvidenceVsAssumptions /></section>
        <section id="value"><ValueCreation /></section>
        <section id="sources"><SourcesSection /></section>
      </main>
      <Footer />
    </div>
  );
}
