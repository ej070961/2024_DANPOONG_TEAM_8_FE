//어떤 사람인지 선택하는 화면
import styled from 'styled-components';
import Header from '../../components/initialSetup/Header';
import { useState } from 'react';
import Loader from '../../components/common/Loader';
import Slime2 from '../../assets/images/slime2.png';
import { useNavigate } from 'react-router-dom';
function Step0({ nickname }: { nickname: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const characters = [
    {
      id: 'CHICK',
      character: '🐥',
      content: '활발하고 적극적이야',
    },
    {
      id: 'CAT',
      character: '🐱',
      content: '차분하고 독립적이야',
    },
    {
      id: 'RABBIT',
      character: '🐰',
      content: '수줍음이 많고 상상하는걸 좋아해',
    },
    {
      id: 'BEAR',
      character: '🐻',
      content: '사교적이고 온화한 편이야',
    },
  ];

  const handleClick = (id: string) => {
    setIsLoading(true);

    // 2초 후 step1으로 이동
    setTimeout(() => {
      navigate('/initial-setup?step=1', {
        state: {
          characterType: id,
        },
      });
    }, 2000);
  };

  return (
    <Wrapper>
      <Header step={0} />
      {!isLoading ? (
        <ContentContainer>
          <p className='title'>{`${nickname}님은 평소에 \n어떤 사람인가요?`}</p>
          <span className='desc'>선택지에 따라 함께 할 버디 캐릭터가 달라져요!</span>
          <ButtonList>
            {characters.map((item, index) => (
              <ButtonContainer key={index} onClick={() => handleClick(item.id)}>
                <span>{item.character}</span>
                <span>{item.content}</span>
              </ButtonContainer>
            ))}
          </ButtonList>
        </ContentContainer>
      ) : (
        <ContentContainer style={{ justifyContent: 'space-between' }}>
          <p className='loader-text'>{`단풍님과 어울리는\n버디를 생성해드릴게요!`}</p>
          <div style={{ width: '100%', height: '44px' }} />
          <Loader />
          <img src={Slime2} width={'170px'} />
          <div style={{ width: '100%', height: '44px' }} />
          <p className='loader-text'>{`잠시만 기다려주세요`}</p>
        </ContentContainer>
      )}
    </Wrapper>
  );
}

export default Step0;

const Wrapper = styled.div`
  max-width: 480px;
  width: 100vw;
  height: 100vh;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 16px 140px 16px;
  display: flex;
  flex-direction: column;
  margin-top: 56px;

  .title {
    ${({ theme }) => theme.fonts.heading_sb_24px};
    color: ${({ theme }) => theme.colors.gray900};
    white-space: pre-line; /* 줄바꿈을 반영 */
  }

  .desc {
    ${({ theme }) => theme.fonts.body_m_16px};
    color: ${({ theme }) => theme.colors.gray500};
    margin-top: 14px;
  }
  .loader-text {
    ${({ theme }) => theme.fonts.heading_sb_24px};
    color: ${({ theme }) => theme.colors.gray900};
    margin: auto;
    white-space: pre-line; /* 줄바꿈을 반영 */
    text-align: center; /* 중앙 정렬 */
  }
  > img {
    margin: auto;
  }
`;

const ButtonList = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 36px;
  gap: 12px;
`;

const ButtonContainer = styled.button`
  width: 100%;
  height: 64px;
  border-radius: 18px;

  display: flex;
  align-items: center;
  padding: 0 22px;

  gap: 16px;

  &:hover {
    background: ${({ theme }) => theme.colors.primary_lighten400};
    border: 2px solid;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  > span {
    ${({ theme }) => theme.fonts.body_m_18px}
    color:${({ theme }) => theme.colors.gray900}
  }
`;
