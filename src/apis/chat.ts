import { axiosFastInstance } from './index.ts';
import { ChatResponse } from '../@type/chat.ts';

export const postChat: (question: string) => Promise<ChatResponse> = async (question: string) => {
  try {
    const res = await axiosFastInstance.post('/api/ask', {
      question,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
