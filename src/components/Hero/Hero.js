import classes from '../Hero/Hero.module.css';

const Hero = () => {
  const {
    container,
    upperSection,
    lowerSection,
    header,
    text,
    continueButton,
  } = classes;

  return (
    <section className={container}>
      <p className={upperSection}>
        <span>reload</span>.case
      </p>
      <div className={lowerSection}>
        <h2 className={header}>
          <span>AI</span>
          Chatbot
        </h2>
        <p className={text}>
          We’ve trained a model called ChatGPT which interacts in a
          conversational way.
        </p>
        <button className={continueButton}>Continue</button>
      </div>
    </section>
  );
};

export default Hero;
