import classes from '../Hero/Hero.module.css';

const Hero = () => {
  const { container, header, text, continueButton } = classes;

  return (
    <div className={container}>
      <h2 className={header}>
        <span>AI</span>
        Chatbot
      </h2>
      <p className={text}>
        We’ve trained a model called ChatGPT which interacts in a conversational
        way.
      </p>
      <button className={continueButton}>Continue</button>
    </div>
  );
};

export default Hero;
