import React from 'react';
import { useEffect, useState } from 'react';
import ContactUsLanding from './ContactUsLanding';
import ContactUsLandingMobile from './ContactUsLandingMobile';
import ContactUsLandingTablet from './ContactUsLandingTablet';
import ContactUsFormSec from './ContactUsFormSec';
import ContactUsFormSecMobile from './ContactUsFormSecMobile';

interface ResponsiveProps {
  type: 'landing' | 'form';
}

const ContactUsResponsive: React.FC<ResponsiveProps> = ({ type }) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add window resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth === 0) {
    return null;
  }

  if (type === 'landing') {
    if (windowWidth < 640) {
      return <ContactUsLandingMobile />;
    }
    if (windowWidth < 1024) {
      return <ContactUsLandingTablet />;
    }
    return <ContactUsLanding />;
  }

  // Form section
  if (windowWidth < 1024) {
    return <ContactUsFormSecMobile />;
  }
  return <ContactUsFormSec />;
};

export default ContactUsResponsive;
