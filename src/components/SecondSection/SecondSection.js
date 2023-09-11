/* eslint-disable react/no-unescaped-entities */
import Chat from '../Chat/Chat';
import Hero from '../Hero/Hero';
import Circles from '../Circles/Circles';
import classes from './SecondSection.module.scss';
import Reload from '../Reload/Reload';
import { isMobile } from 'react-device-detect';

const SecondSection = ({ scroll }) => {
  const { container, upperSection, lowerSection, leftSide, back } = classes;

  return (
    <div
      className={container}
      style={
        !isMobile && scroll > 0
          ? {
              transform:
                'rotate(' +
                (-90 + scroll / 5 >= 0 ? 0 : -90 + scroll / 5) +
                'deg)',
              display: 'flex',
            }
          : {}
      }
    >
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
        <button className={back}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M4.23929 10.0426H15.3759"
              stroke="#B6FBFF"
              strokeWidth="1.19321"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.21665 6.06531L4.23929 10.0427"
              stroke="#B6FBFF"
              strokeWidth="1.19321"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.21665 14.0201L4.23929 10.0427"
              stroke="#B6FBFF"
              strokeWidth="1.19321"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>
        <Reload />
        <div className={leftSide}>
          <Hero />
          <Circles />
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default SecondSection;
