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

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <Hero />
      <Counters />
      <About />
      <GymTour />
      <Facilities />
      <Trainers />
      <Membership />
      <FreeTrial />
      <Schedule />
      <BMICalculator />
      <PersonalTrainer />
      <Nutrition />
      <Gallery />
      <Testimonials />
      <Blog />
      <FAQ />
      <Enquiry />
      <MapSection />
      <NewsletterCTA />
    </div>
  );
}
