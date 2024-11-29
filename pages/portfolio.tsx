import React from 'react';
import PortfolioLanding from '@/components/Portfolio/PortfolioLanding';
import PortfolioGallery from '@/components/Portfolio/PortfolioGallery';
import { Navbar } from '@/components/common/Navbar/Navbar';
import FooterTwo from '@/components/common/Footer/FooterTwo';

const Portfolio = () => {
  return (
    <main>
      <Navbar />
      <PortfolioLanding />
      <PortfolioGallery />
      <FooterTwo useBlackBackground={true} />
    </main>
  );
};

export default Portfolio;
