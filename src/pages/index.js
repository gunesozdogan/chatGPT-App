import Hero from '@/components/Hero/Hero';
import Circles from '@/components/Circles/Circles';
import Reload from '@/components/Reload/Reload';
import SecondSection from '@/components/SecondSection/SecondSection';
import ThirdSection from '@/components/ThirdSection/ThirdSection';

const MainPage = () => {
  return (
    <>
      <section className="first-section">
        <Reload />
        <Hero />
        <Circles />
      </section>
      <section className="second-section">
        <SecondSection />
      </section>
      <section className="third-section">
        <ThirdSection />
      </section>
    </>
  );
};

export default MainPage;
