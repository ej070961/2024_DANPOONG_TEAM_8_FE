import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AIResultSvg from '../../assets/svg/ai-result.svg?react';
import ArrowBottomIcon from '../../assets/svg/arrow-bottom.svg?react';
import ResultPng from '../../assets/images/analysis-result.png';
import { useState } from 'react';
import Button from '../../components/common/Button';
function AnalysisResult() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  //   const location = useLocation();
  //   const { checkListId } = location.state;
  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavigate = () => {
    navigate('/home');
  };
  return (
    <Wrapper>
      <ContentContainer>
        <AIResultSvg />
        <span className='title'>
          {`단풍님은`} <span className='point-word'>식단 계획과 식품 관련</span>
          {`\n도움이 필요할 것 같아요!`}
        </span>
        <img src={ResultPng} />
        <span className='title'>관련된 맞춤형 미션을 제공해드릴게요</span>
        <DetailBtn onClick={handleClick}>
          자세한 분석 결과 보기 <ArrowBottomIcon />
        </DetailBtn>
        {open && (
          <DetailContainer>
            <span className='main-text'>종합 분석</span>
            <div className='desc-container'>
              <span>
                단풍님은 생활 관리와 관련된 여러 항목에서 높은 점수를 기록했어요. 특히 청소 영역에
                대해 뛰어난 능력을 보이셨으며, 쓰레기 처리 방법과 의류 정리 부분에서도 긍정적인
                결과를 얻었어요. 다만 주방 기구 정리, 식품 유통기한 확인 및 식단계획과 같은
                부분에서는 개선이 필요하다는 평가가 있었어요.
              </span>
            </div>
          </DetailContainer>
        )}
        <Button text='홈으로 가기' onClick={handleNavigate} />
      </ContentContainer>
    </Wrapper>
  );
}

export default AnalysisResult;

const Wrapper = styled.div`
  width: 100vw;
  max-width: 480px;

  display: flex;
  flex-direction: column;
  background: #ffffff;

  background-size: 100vw 100vh;
`;
const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 11px 16px 110px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;

  .title {
    ${({ theme }) => theme.fonts.heading_sb_24px};
    color: ${({ theme }) => theme.colors.gray900};
    white-space: pre-line; /* 줄바꿈을 반영 */
    text-align: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .point-word {
    ${({ theme }) => theme.fonts.heading_sb_24px};
    color: ${({ theme }) => theme.colors.primary};
    white-space: pre-line; /* 줄바꿈을 반영 */
  }
  > img {
    width: 90%;
  }
`;

const DetailBtn = styled.button`
  display: flex;
  gap: 1px;
  align-items: center;

  ${({ theme }) => theme.fonts.body_m_16px};
  color: ${({ theme }) => theme.colors.gray500};
`;

const DetailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 45px;

  .main-text {
    ${({ theme }) => theme.fonts.heading_sb_22px};
    color: ${({ theme }) => theme.colors.gray900};
  }

  .desc-container {
    width: 100%;
    border-radius: 30px;
    padding: 43px 18px;
    margin-top: 11px;

    background: ${({ theme }) => theme.colors.gray100};
    > span {
      ${({ theme }) => theme.fonts.body_m_16px};
      color: ${({ theme }) => theme.colors.gray900};
    }
  }
`;
