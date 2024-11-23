//어떤 사람인지 선택하는 화면
import styled, { keyframes } from 'styled-components';
import Header from '../../components/initialSetup/Header';
import EggPng from '../../assets/images/egg.png';
import Button from '../../components/common/Button';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createCharacter } from '../../apis/character';
import { useAuthStore } from '../../store/useAuthStore';
function Step1() {
  const [name, setName] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();
  const { characterType } = location.state;
  console.log(characterType);

  const { accessToken } = useAuthStore();

  const handleSubmit = async () => {
    const res = await createCharacter(accessToken!, characterType, name);
    if (res) {
      navigate('/initial-setup?step=2');
    }
  };
  return (
    <Wrapper>
      <Header step={1} />
      <ContentContainer>
        <p>{'쨘! 알이 생성되었어요!\n알의 이름은 무엇으로 할까요?'}</p>
        <ImgWrapper />
        <img src={EggPng} />
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </ContentContainer>

      <Button text='이렇게 할게요!' onClick={handleSubmit} disabled={name === ''} />
    </Wrapper>
  );
}

export default Step1;

const Wrapper = styled.div`
  max-width: 480px;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// 애니메이션 정의
const grow = keyframes`
  0% {
    width: 150px;
    height: 150px;
  }
  100% {
    width: 270px;
    height: 270px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;
  padding: 30px 16px 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 56px;

  > p {
    ${({ theme }) => theme.fonts.heading_sb_24px};
    color: ${({ theme }) => theme.colors.gray900};
    white-space: pre-line; /* 줄바꿈을 반영 */
    text-align: center; /* 중앙 정렬 */
  }

  > img {
    position: absolute;
    top: 55%; /* 위치 조정 */
    left: 50%;
    transform: translate(-50%, -50%); /* 중앙 정렬 */
    z-index: 10;
    width: 350px;
  }

  > input {
    width: 100%;
    height: 60px;
    border-radius: 18px;
    background: ${({ theme }) => theme.colors.gray50};
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.gray300};
    text-align: center;

    ${({ theme }) => theme.fonts.body_m_18px};
    color: ${({ theme }) => theme.colors.gray900};
    &:focus {
      outline: none;
    }
  }
`;

// 스타일드 컴포넌트 정의
const ImgWrapper = styled.div`
  position: absolute;
  top: 55%; /* 위치 조정 */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */

  background: rgba(255, 238, 171, 0.8);
  filter: blur(75px);
  border-radius: 50%;
  animation: ${grow} 2s infinite alternate; /* 애니메이션 설정 */
`;
