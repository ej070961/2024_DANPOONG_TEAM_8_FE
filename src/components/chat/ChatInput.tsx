import sendIcon from '../../assets/svg/send.svg';
import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { Message } from '../../types';

interface ChatInputProps {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const ChatInput = ({ setMessages }: ChatInputProps) => {
  const [value, setValue] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);

    if (textAreaRef.current) {
      // 높이 자동 조정
      textAreaRef.current.style.height = '52px'; // 높이 초기화
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`; // 컨텐츠 높이에 맞게 설정
    }
  };

  const handleSendMessage = () => {
    if (value.trim()) {
      const userMessage: Message = { id: Date.now(), content: value.trim(), isUser: true };
      setMessages((prev) => [...prev, userMessage]);
      setValue('');
      if (textAreaRef.current) {
        // 높이 자동 조정
        textAreaRef.current.style.height = '52px'; // 높이 초기화
      }

      setTimeout(() => {
        const botReply: Message = {
          id: Date.now() + 1,
          content: '네, 이해했어요. 다음 질문을 해주세요.',
          isUser: false,
        };
        setMessages((prev) => [...prev, botReply]);
      }, 1000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
      if (textAreaRef.current) {
        textAreaRef.current.style.height = '52px'; //
      }
    }
  };

  return (
    <>
      <InputContainer>
        <ChatTextArea
          ref={textAreaRef}
          value={value}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          placeholder='메세지를 입력해주세요'
        />
        <SendButton className={value.trim() ? 'visible' : ''} onClick={handleSendMessage}>
          <img src={sendIcon} alt='Send' />
        </SendButton>
      </InputContainer>
    </>
  );
};

export default ChatInput;

const InputContainer = styled.div`
  position: fixed;
  bottom: 32px;
  left: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray100};
  border-radius: 30px;
  padding: 0 16px; /* 좌우 패딩으로 간격 확보 */
`;

const ChatTextArea = styled.textarea`
  flex: 1;
  border: none;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.gray100};
  font: ${({ theme }) => theme.fonts.body_m_16px};
  color: ${({ theme }) => theme.colors.gray900};
  outline: none;
  resize: none;
  height: 52px;
  min-height: 52px;
  max-height: 150px;
  overflow-y: auto;
  padding: 15px;
`;

const rotateAnimation = keyframes`
  0% {
    transform: scale(0.9) rotate(0deg);
  }
  25% {
    transform: scale(1) rotate(-20deg);
  }
  50% {
    transform: scale(1) rotate(10deg);
  }
  75% {
    transform: scale(1) rotate(-10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
`;

const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: 4px; /* 텍스트 영역과의 간격 */

  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.3s ease, transform 0.1s ease;

  &.visible {
    opacity: 1;
    transform: scale(1);
    animation: ${rotateAnimation} 0.3s ease;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;
