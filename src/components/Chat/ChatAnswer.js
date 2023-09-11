import classes from './ChatAnswer.module.scss';

const ChatAnswer = ({ answer }) => {
  const { container, upperContainer, text } = classes;

  return (
    <div className={container}>
      <div className={upperContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
        >
          <g clipPath="url(#clip0_1_7816)">
            <rect
              x="0.637022"
              y="0.757324"
              width="44.5465"
              height="44.5465"
              rx="22.2732"
              fill="white"
            />
            <rect
              x="0.637022"
              y="0.757324"
              width="44.5465"
              height="44.5465"
              rx="22.2732"
              fill="#B6FBFF"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_7816">
              <rect
                width="44.5465"
                height="44.5465"
                fill="white"
                transform="translate(0.637022 0.757324)"
              />
            </clipPath>
          </defs>
        </svg>
        <span>Chat GPT</span>
      </div>
      <p className={text}>{answer}</p>
    </div>
  );
};

export default ChatAnswer;
