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
import { navigations } from '../../constant/navigations';
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
      try {
        const content = data?.report.report[0].analysis;

        // JSON인지 문자열인지 판단
        if (typeof content === 'object') {
          if (typeof content.content === 'string') {
            // JSON 객체라면 바로 세팅
            console.log(content.content);
            setDetailData(content.content);
          } else {
            setDetailData('알 수 없는 응답 형식입니다. 관리자에게 문의하세요.');
          }
        } else if (typeof content === 'string') {
          // 문자열이라면 ```json과 ```를 제거하고 JSON 파싱 시도
          const cleanedResponse = content.includes('```')
            ? content.replace(/```json|```/g, '')
            : content;

          try {
            const parsedData = JSON.parse(cleanedResponse); // JSON 파싱
            console.log(parsedData.content);
            setDetailData(parsedData.content);
          } catch (error) {
            console.error('JSON 파싱 실패:', error);
            setDetailData('응답 데이터를 처리할 수 없습니다. 관리자에게 문의하세요.');
          }
        } else {
          // 다른 형식일 경우 메시지 표시
          console.warn('알 수 없는 데이터 형식:', content);
          setDetailData('알 수 없는 응답 형식입니다. 관리자에게 문의하세요.');
        }
      } catch (error) {
        console.error('데이터를 처리하는 중 오류 발생:', error);
        setDetailData('데이터를 불러오는 중 오류가 발생했습니다.');
      }
    };

    if (!isLoading && data) {
      fetchData();
    }
  }, [isLoading, data]);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNavigate = () => {
    //최초 로그인 시 온보딩 화면으로 이동
    if (localStorage.getItem('init') === 'True') {
      navigate(navigations.ONBOARDING);
    } else {
      navigate(navigations.HOME);
    }
  };
  if (!isLoading && data) {
    return (
      <Wrapper>
        <ContentContainer>
          <AIResultSvg />
          <span className='title'>
            {`단풍님은`}{' '}
            <span className='point-word'>{`${data.report.report[0].lowest_scores[0].keyword}과 ${data.report.report[0].lowest_scores[1].keyword}`}</span>
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
  height: 100vh;
  max-width: 480px;

  display: flex;
  flex-direction: column;
  background: #ffffff;
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
