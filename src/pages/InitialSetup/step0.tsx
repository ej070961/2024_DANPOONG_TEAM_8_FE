//어떤 사람인지 선택하는 화면
import styled from 'styled-components';
import Header from '../../components/InitialSetup/Header';
import { useState } from 'react';
function Step0() {
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <Wrapper>
      <Header step={0} />
      {!isLoading ? (
        <ContentContainer>
          <p className='title'>단풍님은 평소에 어떤 사람인가요?</p>
          <span className='desc'>선택지에 따라 함께 할 버디 캐릭터가 달라져요!</span>
          <ButtonList>
            {characters.map((item, index) => (
              <ButtonContainer
                key={index}
                onClick={() => {
                  setSelectedCharacter(item.id);
                  setIsLoading(true);
                }}
              >
                <span>{item.character}</span>
                <span>{item.content}</span>
              </ButtonContainer>
            ))}
          </ButtonList>
        </ContentContainer>
      ) : (
        <ContentContainer style={{ justifyContent: 'space-between' }}>
          <p className='loader-text'>{`단풍님과 어울리는\n버디를 생성해드릴게요!`}</p>
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
    width: 170px;
    ${({ theme }) => theme.fonts.heading_sb_24px}
    color:${({ theme }) => theme.colors.gray900}
  }

  .desc {
    ${({ theme }) => theme.fonts.body_m_16px};
    color: ${({ theme }) => theme.colors.gray500};
    margin-top: 14px;
  }
  .loader-text {
    ${({ theme }) => theme.fonts.heading_sb_24px}
    color:${({ theme }) => theme.colors.gray900}
    margin: auto;
    white-space: pre-line; /* 줄바꿈을 반영 */
    text-align: center; /* 중앙 정렬 */
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
