import Hero from "@/components/sections/Hero";
import Counters from "@/components/sections/Counters";
import About from "@/components/sections/About";
import GymTour from "@/components/sections/GymTour";
import Facilities from "@/components/sections/Facilities";
import Trainers from "@/components/sections/Trainers";
import Membership from "@/components/sections/Membership";
import Gallery from "@/components/sections/Gallery";
import BMICalculator from "@/components/sections/BMICalculator";
import Schedule from "@/components/sections/Schedule";
import FreeTrial from "@/components/sections/FreeTrial";
import PersonalTrainer from "@/components/sections/PersonalTrainer";
import Nutrition from "@/components/sections/Nutrition";
import Blog from "@/components/sections/Blog";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import Enquiry from "@/components/sections/Enquiry";
import MapSection from "@/components/sections/MapSection";
import NewsletterCTA from "@/components/sections/NewsletterCTA";
import useReveal from "@/hooks/useReveal";

export default function HomePage() {
  useReveal();

  return (
    <div data-testid="home-page">
      <div className="reveal">
        <Hero />
      </div>
      <div className="reveal">
        <Counters />
      </div>
      <div className="reveal">
        <About />
      </div>
      <div className="reveal">
        <GymTour />
      </div>
      <div className="reveal">
        <Facilities />
      </div>
      <div className="reveal">
        <Trainers />
      </div>
      <div className="reveal">
        <Membership />
      </div>
      <div className="reveal">
        <FreeTrial />
      </div>
      <div className="reveal">
        <Schedule />
      </div>
      <div className="reveal">
        <BMICalculator />
      </div>
      <div className="reveal">
        <PersonalTrainer />
      </div>
      <div className="reveal">
        <Nutrition />
      </div>
      <div className="reveal">
        <Gallery />
      </div>
      <div className="reveal">
        <Testimonials />
      </div>
      <div className="reveal">
        <Blog />
      </div>
      <div className="reveal">
        <FAQ />
      </div>
      <div className="reveal">
        <Enquiry />
      </div>
      <div className="reveal">
        <MapSection />
      </div>
      <div className="reveal">
        <NewsletterCTA />
      </div>
    </div>
  );
}
