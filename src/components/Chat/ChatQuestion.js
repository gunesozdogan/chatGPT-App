import classes from './ChatQuestion.module.scss';

const ChatQuestion = ({ question }) => {
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
          <g clipPath="url(#clip0_1_7803)">
            <rect
              x="0.637085"
              y="0.708862"
              width="44.5465"
              height="44.5465"
              rx="22.2732"
              fill="white"
            />
            <rect
              x="0.637085"
              y="0.708862"
              width="44.5465"
              height="44.5465"
              rx="22.2732"
              fill="#C8B6FF"
            />
            <path
              d="M18.03 30.8802V15.1867H24.5118C28.0355 15.1867 30.1237 17.0574 30.1237 20.2113V20.233C30.1237 22.2994 29.0252 24.0177 27.2851 24.7029L30.5913 30.8802H26.8719L23.9463 25.1923H21.3144V30.8802H18.03ZM21.3144 22.7018H24.153C25.7843 22.7018 26.7631 21.7774 26.7631 20.233V20.2113C26.7631 18.7104 25.7299 17.7534 24.1094 17.7534H21.3144V22.7018Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_7803">
              <rect
                width="44.5465"
                height="44.5465"
                fill="white"
                transform="translate(0.637085 0.708862)"
              />
            </clipPath>
          </defs>
        </svg>
        <span>You</span>
      </div>
      <p className={text}>{question}</p>
    </div>
  );
};

export default ChatQuestion;
