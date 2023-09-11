import { useState } from 'react';
import chatGPTClient from '../../../chatGPT';

import classes from '../Chat/Chat.module.css';

const Chat = () => {
  const { container } = classes;
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const userMessage = { role: 'user', content: input };
      const { data } = await chatGPTClient.post('/completions', {
        model: 'gpt-3.5-turbo',
        messages: [...conversation, userMessage],
        max_tokens: 50,
      });

      setConversation([...conversation, userMessage]);

      const modelReply = ((((data || {}).choices || [])[0] || {}).message || {})
        .content;
      const assistantMessage = { role: 'assistant', content: modelReply };

      setConversation([...conversation, assistantMessage]);
      setResponse(modelReply);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={container}>
      <h1>Chat with ChatGPT</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Send</button>
      </form>
      <div>
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;
