/* eslint-disable react/no-unescaped-entities */
import Chat from '../Chat/Chat';
import Hero from '../Hero/Hero';
import Circles from '../Circles/Circles';
import classes from './SecondSection.module.scss';

const SecondSection = () => {
  const { container, upperSection, lowerSection, leftSide } = classes;

  return (
    <>
      <div className={upperSection}>
        <h2>
          Start chatting with <span>AI.</span>
        </h2>
        <p>
          Chat about any topic with ChatGPT in any time. It can be your friend,
          tutor or therapist.
        </p>
        <button>
          Let's start chat
          <svg
            width="36"
            height="6"
            viewBox="0 0 36 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36 3L31 0.113249V5.88675L36 3ZM0 3.5H31.5V2.5H0V3.5Z"
              fill="#B6FBFF"
            />
          </svg>
        </button>
      </div>
      <div className={lowerSection}>
        <div className={leftSide}>
          <Hero />
          <Circles />
        </div>
        <Chat />
      </div>
    </>
  );
};

export default SecondSection;
