import styled, { keyframes } from 'styled-components';
import WritingIdeaPng from '../../assets/images/writing-idea.png';
import Button from '../common/Button';
import { useNavigate } from 'react-router-dom';
import { navigations } from '../../constant/navigations';
import { useEffect, useState } from 'react';

interface CompleteBottomSheetProps {
  missionId: number;
  isOpen: boolean;
  onClose: () => void;
}

function CompleteBottomSheet({ missionId, isOpen, onClose }: CompleteBottomSheetProps) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeoutId: number; // 브라우저의 Timeout ID는 숫자 타입

    if (isOpen) {
      setVisible(true);
    } else {
      timeoutId = window.setTimeout(() => setVisible(false), 350); // window.setTimeout 사용
    }

    return () => {
      window.clearTimeout(timeoutId); // window.clearTimeout으로 클리어
    };
  }, [isOpen]);

  if (!visible) return null;

  return (
    <Overlay onClick={onClose}>
      <Wrapper
        onClick={(e) => e.stopPropagation()} // 부모 이벤트 전파 중단
        isOpen={isOpen}
      >
        <hr className='top-bar' />
        <ContentContainer>
          <span className='title'>{`해당 미션을 수행하셨나요? \n바로 수행 일지를 작성해보세요!`}</span>
          <span className='desc'>수행 일지를 작성해야 미션이 완료돼요</span>
          <img src={WritingIdeaPng} alt='아이디어 작성' />
        </ContentContainer>
        <Button
          text='작성하러 가기'
          onClick={() => navigate(`${navigations.MISSION_RECORD_WRITE}/${missionId}`)}
        />
      </Wrapper>
    </Overlay>
  );
}

export default CompleteBottomSheet;

const SlideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const SlideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 50%; /* X축 기준으로 가운데 정렬 */
  transform: translateX(-50%); /* X축 정렬을 위해 사용 */
  width: 100vw;
  height: 100vh;
  z-index: 100;
  max-width: 480px;
  background: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 458px;
  border-radius: 40px 40px 0 0;
  background: #ffffff;
  z-index: 101;

  display: flex;
  flex-direction: column;

  animation: ${({ isOpen }) => (isOpen ? SlideUp : SlideDown)} 0.35s ease-in-out forwards;

  .top-bar {
    width: 38px;
    height: 5px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.gray200};
    margin: 10px auto;
    border: none;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 25px;
  display: flex;
  flex-direction: column;
  gap: 7px;

  .title {
    ${({ theme }) => theme.fonts.heading_sb_20px};
    color: ${({ theme }) => theme.colors.gray900};
    white-space: pre-line; /* 줄바꿈을 반영 */
  }

  .desc {
    ${({ theme }) => theme.fonts.body_m_16px};
    color: ${({ theme }) => theme.colors.gray500};
  }

  > img {
    width: 300px;

    margin: auto;
    margin-top: -40px;
  }
`;
