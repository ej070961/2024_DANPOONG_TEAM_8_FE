import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AIResultSvg from '../../assets/svg/ai-result.svg?react';
import ArrowBottomIcon from '../../assets/svg/arrow-bottom.svg?react';
import ResultPng from '../../assets/images/analysis-result.png';
import { useEffect, useState } from 'react';
import Button from '../../components/common/Button';
import { useQuery } from '@tanstack/react-query';
import { getCheckListAnalysisResult } from '../../apis/goal';
import LoadingModal from '../../components/goal/LoadingModal';
function AnalysisResult() {
  const [open, setOpen] = useState(false);

  const [detailData, setDetailData] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const { checkListId } = location.state;

  const { isLoading, data } = useQuery({
    queryKey: ['getAnalysisResult'],
    queryFn: () => getCheckListAnalysisResult(checkListId),
  });

  useEffect(() => {
    const fetchData = async () => {
      const jsonString = data.report.report[0].analysis.content;
      // 문자열에서 ```json과 ``` 제거
      const cleanedResponse = jsonString.replace(/```json|```/g, '');

      const parsedData = JSON.parse(cleanedResponse); // JSON 파싱
      console.log(parsedData.content);
      setDetailData(parsedData.content); // content 필드 접근
    };
    if (!isLoading && data) {
      fetchData();
    }
  }, [isLoading, data]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavigate = () => {
    navigate('/home');
  };
  if (!isLoading && data) {
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
                <span>{detailData}</span>
              </div>
            </DetailContainer>
          )}
          <Button text='홈으로 가기' onClick={handleNavigate} />
        </ContentContainer>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper style={{ height: '100vh' }}>
        <LoadingModal />
      </Wrapper>
    );
  }
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
