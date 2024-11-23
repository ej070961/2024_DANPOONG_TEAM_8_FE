import styled, { keyframes } from 'styled-components';
import BackgroundImg from '../../assets/images/home_bg.png';
import MissionInfo from '../../components/Home/MissionInfo';
import ChatIcon from '../../assets/icon/chat-icon';
import ChatIntroSvg from '../../assets/svg/chat-intro.svg?react';
import StarSvg from '../../assets/svg/star.svg?react';
import PolygonSvg from '../../assets/svg/polygon.svg?react';
import { useNavigate } from 'react-router-dom';
import { navigations } from '../../constant/navigations.ts';
import { useQuery } from '@tanstack/react-query';
import { getHomeInfo } from '../../apis/home.ts';
import { CharacterLevel, CharacterType } from '../../constant/character.ts';
import MissionCard from '../../components/mission/MissionCard.tsx';
import { AreaType } from '../../@type/goal.ts';
import NavBar from '../../components/common/NavBar.tsx';
import Loading from '../../components/common/Loading.tsx';

function Home() {
  const { data, isPending } = useQuery({
    queryKey: ['home'],
    queryFn: () => getHomeInfo(),
  });
  const navigation = useNavigate();

  if (isPending) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  const character = data?.character!!;
  const mission = data?.mission!!;
  const characterImage =
    character.level < 5 ? CharacterLevel[character.level] : CharacterType[character.characterType];

  const handleNavigate = () => {
    navigation(navigations.CHAT, {
      state: {
        characterName: character.characterName,
        image: characterImage,
      },
    });
  };

  return (
    <Wrapper>
      <ContentContainer>
        {/* 미션관리, 챗봇 버튼 영역 */}
        <HeaderSection>
          <MissionInfo
            nickname={data!!.member_nickname}
            level={character.level}
            missionProPer={data!!.missionProPer}
          />
          <ChatBtn onClick={handleNavigate}>
            <ChatIcon />
          </ChatBtn>
          <ChatIntroMsg />
        </HeaderSection>
        {/* 캐릭터 영역 */}
        <CharacterWrapper />
        <CharacterSection>
          <button className='msg-wrapper'>오늘은 무슨 일 없었어?</button>
          <PolygonSvg />
          <ImgContainer>
            <StyledStar left={80} top={10} />
            <StyledStar left={50} top={60} />
            <StyledStar right={50} top={30} />
            <img src={characterImage} />
          </ImgContainer>
          <button className='name-wrapper'>{character?.characterName}</button>
        </CharacterSection>
        <MissionContainer>
          {mission && (
            <MissionCard
              id={mission.id}
              missionType={AreaType[mission.areaName]}
              missionName={mission.missionName}
              isComplete={mission.completed}
              isHome={true}
              mission={mission}
            />
          )}
        </MissionContainer>
      </ContentContainer>
      <NavBar />
    </Wrapper>
  );
}

export default Home;
const Wrapper = styled.div`
  width: 100vw;
  max-width: 480px;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-image: url(${BackgroundImg});
  background-size: 100vw 100vh;
`;
const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 11px 16px 110px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 14px;
`;
const ChatBtn = styled.button`
  min-width: 55px;
  width: 55px;
  height: 55px;

  border-radius: 50%;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 사라지는 애니메이션 정의
const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

// 애니메이션이 적용된 ChatIntroSvg 스타일 정의
const ChatIntroMsg = styled(ChatIntroSvg)`
  position: absolute;
  bottom: -60px;
  right: 5px;
  animation: ${fadeOut} 1s ease-out 4s forwards; /* 4초 후 서서히 사라짐 */
`;

// 애니메이션 정의
const grow = keyframes`
  0% {
    width: 100px;
    height: 100px;
  }
  100% {
    width: 280px;
    height: 280px;
  }
`;
const CharacterWrapper = styled.div`
  position: absolute;
  top: 55%; /* 위치 조정 */
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */

  background: rgba(255, 238, 171, 0.8);
  filter: blur(75px);
  border-radius: 50%;
  animation: ${grow} 2s infinite alternate; /* 애니메이션 설정 */
`;
// 스타일드 컴포넌트 정의
const ImgContainer = styled.div`
  position: relative;
  margin-bottom: -5px;

  > img {
    height: 250px;
  }
`;

const Stargrow = keyframes`
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1.3);
  }
`;

const StyledStar = styled(StarSvg)<{
  left?: number;
  top?: number;
  bottom?: number;
  right?: number;
}>`
  position: absolute;
  left: ${({ left }) => left}px;
  right: ${({ right }) => right}px;
  top: ${({ top }) => top}px;
  bottom: ${({ bottom }) => bottom}px;
  animation: ${Stargrow} 2s infinite alternate; /* 애니메이션 설정 */
`;

const CharacterSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  z-index: 20;

  .msg-wrapper {
    padding: 16px 34px;
    margin-bottom: 5px;
    height: 57px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(15px);
    border-radius: 35px;

    ${({ theme }) => theme.fonts.body_m_18px};
    color: ${({ theme }) => theme.colors.gray900};
  }

  .name-wrapper {
    padding: 0 26px;

    height: 35px;
    background: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(9.83607px);
    border-radius: 22.9508px;

    ${({ theme }) => theme.fonts.body_m_14px};
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

const MissionContainer = styled.div`
  position: absolute;
  bottom: 112px;
  width: 100%;
  padding: 0 16px;
`;
