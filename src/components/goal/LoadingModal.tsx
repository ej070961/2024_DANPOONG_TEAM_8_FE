import styled from 'styled-components';
import Loader from '../common/Loader';
import Slime2 from '../../assets/images/slime2.png';
function LoadingModal() {
  return (
    <Wrapper>
      <ContentContainer style={{ justifyContent: 'space-between' }}>
        <p className='loader-text'>{`작성하신 사전 점검표를 \n바탕으로 분석중이에요`}</p>
        <div style={{ width: '100%', height: '44px' }} />
        <Loader />
        <img src={Slime2} width={'170px'} />
        <div style={{ width: '100%', height: '44px' }} />
        <p className='loader-text'>{`잠시만 기다려주세요`}</p>
      </ContentContainer>
    </Wrapper>
  );
}

export default LoadingModal;
const Wrapper = styled.div`
  position: absolute;
  max-width: 480px;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  z-index: 10;
`;
const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 16px 140px 16px;
  display: flex;
  flex-direction: column;
  margin-top: 56px;

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
