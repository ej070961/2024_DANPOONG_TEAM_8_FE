import { Message } from '../../types';

export const chatData: Message[] = [
  {
    id: 0,
    content: '안녕하세요! 무엇을 도와드릴까요?',
    isUser: false,
  },
  {
    id: 1,
    content: '저는 오늘 기분이 좋지 않아요.',
    isUser: true,
  },
  {
    id: 2,
    content: '그럼, 어떤 일이 있었나요?',
    isUser: false,
  },
  {
    id: 3,
    content: '오늘 회사에서 업무가 너무 많아서 힘들었어요.',
    isUser: true,
  },
];
