import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import styled from 'styled-components';

import StatusBar from '../components/onboarding/StatusBar';

interface LayoutProps {
  stepIndex: number;
  title: string;
  description: string;
  navigatePath: string;
  imagePath: string;
}
function OnboardingLayout({ stepIndex, title, description, navigatePath, imagePath }: LayoutProps) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <h3 className='title'>{title}</h3>
        <span className='desc'>{description}</span>
      </Container>
      <img src={imagePath} width={'90%'} />
      <StatusBar step={stepIndex} />
      <Button text='다음' onClick={() => navigate(navigatePath)} />
    </Wrapper>
  );
}

export default OnboardingLayout;
const Wrapper = styled.div`
  width: 100vw;
  max-width: 400px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 25px 0;
  padding-bottom: 90px;
  > img {
    margin: auto;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 100px;

  .title {
    ${({ theme }) => theme.fonts.heading_b_30px};
    color: ${({ theme }) => theme.colors.gray900};
    white-space: pre-line; /* 줄바꿈을 반영 */
    text-align: center; /* 중앙 정렬 */
  }

  .desc {
    ${({ theme }) => theme.fonts.body_m_16px};
    color: ${({ theme }) => theme.colors.gray500};
    white-space: pre-line; /* 줄바꿈을 반영 */
    text-align: center; /* 중앙 정렬 */
  }
`;
