import styled from 'styled-components';
import chatbot from '../../assets/images/chatbot.png';
import ChatRoom from '../../components/chat/ChatRoom.tsx';
import BackToolbar from '../../components/Common/BackToolbar.tsx';

const ChatbotPage = () => {
  return (
    <ChatbotContainer>
      <BackToolbar title='버디버디' isWhite={true} />
      <BackgroundImage src={'/src/assets/svg/chatbot_bottom_bg.svg'} />
      <ChatbotImage src={chatbot} alt='chatbot' />
      <ChatRoom />
    </ChatbotContainer>
  );
};

export default ChatbotPage;

const ChatbotContainer = styled.div`
  background-image: url('/src/assets/images/chatbot_bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray100};
`;

const BackgroundImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const ChatbotImage = styled.img`
  position: absolute;
  width: 239px;
  height: 186px;
  bottom: 140px; /* 하단에서 100px 위로 배치 */
  left: 50%; /* 수평 중앙 정렬 */
  transform: translateX(-50%); /* 이미지 중심을 정확히 가운데로 이동 */
`;
