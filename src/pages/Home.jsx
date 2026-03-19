import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import BestSellers from '../components/BestSellers';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="page-home">
      <Hero />
      <Benefits />
      <FeaturedCollections />
      <BestSellers />
      <Testimonials />
    </div>
  );
};

export default Home;
