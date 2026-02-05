import React from 'react';
import Hero from '../components/Hero';
import EServicesSection from '../components/EServicesSection';
import GovernmentServicesSection from '../components/GovernmentServicesSection';
import Announcements from '../components/Announcements';
import ImportantLinks from '../components/ImportantLinks';
import GeneralHelp from '../components/GeneralHelp';

const HomePage: React.FC = () => {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <GovernmentServicesSection />
      <EServicesSection />
      <Announcements />
      <ImportantLinks />
      <GeneralHelp />
    </main>
  );
};

export default HomePage;
