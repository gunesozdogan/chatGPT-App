import { useState } from 'react';
import chatGPTClient from '../../../chatGPT';

import classes from '../Chat/Chat.module.css';
import ChatQuestion from './ChatQuestion';
import ChatAnswer from './ChatAnswer';

const Chat = () => {
  const { container, inputContainer } = classes;
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    event.target.querySelector('input').value = '';

    setInput('');

    try {
      const userMessage = { role: 'user', content: input };
      const { data } = await chatGPTClient.post('/completions', {
        model: 'gpt-3.5-turbo',
        messages: [...conversation, userMessage],
        max_tokens: 50,
      });

      const modelReply = ((((data || {}).choices || [])[0] || {}).message || {})
        .content;
      const assistantMessage = { role: 'assistant', content: modelReply };

      setConversation([...conversation, userMessage, assistantMessage]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={container}>
      {conversation.map((item, index) => {
        return item.role === 'user' ? (
          <div key={`${item.content}-${index}`}>
            <ChatQuestion question={item.content} />
          </div>
        ) : (
          <div key={`${item.content}-${index}`}>
            <ChatAnswer answer={item.content} />
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <div className={inputContainer}>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="Message"
            spellCheck="false"
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <g clipPath="url(#clip0_1_10375)">
                <path
                  d="M3.83752 10.0816H12.4856L9.8387 13.2608C9.77742 13.3346 9.73125 13.4196 9.70285 13.5112C9.67445 13.6028 9.66436 13.6991 9.67316 13.7945C9.69094 13.9873 9.78458 14.1652 9.9335 14.289C10.0824 14.4127 10.2744 14.4723 10.4672 14.4545C10.66 14.4367 10.8379 14.3431 10.9616 14.1942L14.6076 9.81907C14.6321 9.78427 14.654 9.74771 14.6732 9.70969C14.6732 9.67323 14.7096 9.65136 14.7242 9.6149C14.7573 9.53129 14.7746 9.44229 14.7753 9.35239C14.7746 9.26249 14.7573 9.1735 14.7242 9.08989C14.7242 9.05343 14.6878 9.03155 14.6732 8.99509C14.654 8.95707 14.6321 8.92052 14.6076 8.88572L10.9616 4.51062C10.8931 4.4283 10.8072 4.36211 10.7102 4.31674C10.6131 4.27137 10.5073 4.24794 10.4002 4.24811C10.2298 4.24778 10.0647 4.30711 9.9335 4.41582C9.85966 4.47704 9.79863 4.55221 9.75389 4.63705C9.70915 4.72189 9.68159 4.81472 9.67279 4.91023C9.66398 5.00573 9.6741 5.10204 9.70257 5.19363C9.73104 5.28522 9.7773 5.37029 9.8387 5.44397L12.4856 8.62321H3.83752C3.64413 8.62321 3.45866 8.70004 3.32191 8.83678C3.18516 8.97353 3.10834 9.159 3.10834 9.35239C3.10834 9.54579 3.18516 9.73126 3.32191 9.868C3.45866 10.0048 3.64413 10.0816 3.83752 10.0816Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_10375">
                  <rect
                    width="17.5004"
                    height="17.5004"
                    fill="white"
                    transform="translate(0.191589 0.602173)"
                  />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
