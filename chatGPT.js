import axios from 'axios';

const chatGPTClient = axios.create({
  baseURL: 'https://api.openai.com/v1/chat',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  },
});

export default chatGPTClient;
