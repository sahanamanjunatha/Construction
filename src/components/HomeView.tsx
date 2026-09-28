import React from 'react';
import { Hero } from './Hero';
import { WhyChoose } from './WhyChoose';
import { IntroAbout } from './IntroAbout';
import { FeaturedServices } from './FeaturedServices';
import { FeaturedProjects } from './FeaturedProjects';
import { FaqSection } from './FaqSection';

interface HomeViewProps {
  onNavigateToAbout: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateToAbout }) => {
  return (
    <>
      <Hero />
      <WhyChoose />
      <div onClick={onNavigateToAbout} className="cursor-pointer">
        <IntroAbout />
      </div>
      <FeaturedServices />
      <FeaturedProjects />
      <FaqSection />
    </>
  );
};
