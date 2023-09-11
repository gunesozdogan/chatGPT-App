import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero/Hero';
import Circles from '@/components/Circles/Circles';
import Reload from '@/components/Reload/Reload';
import SecondSection from '@/components/SecondSection/SecondSection';
import ThirdSection from '@/components/ThirdSection/ThirdSection';
import FourthSection from '@/components/FourthSection/FourthSection';
import Head from 'next/head';

const MainPage = () => {
  const [currentScroll, setCurrentScroll] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 1000) {
          setCurrentScroll(window.scrollY);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [currentScroll]);

  return (
    <>
      <Head>
        <title>Reload Frontend Case</title>
      </Head>
      <section className="first-section">
        <Reload />
        <Hero />
        <Circles />
      </section>
      <section className="second-section">
        <SecondSection scroll={currentScroll} />
      </section>
      <section className="third-section">
        <ThirdSection />
      </section>
      <section className="fourth-section">
        <FourthSection />
      </section>
    </>
  );
};

export default MainPage;
