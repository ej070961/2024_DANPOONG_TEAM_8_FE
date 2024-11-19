import styled from 'styled-components';
import BackToolbar from '../../components/common/BackToolbar.tsx';
import CustomButton from '../../components/common/CustomButton.tsx';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import ConfirmContent from '../../components/goal/ConfirmContent.tsx';
import { navigations } from '../../constant/navigations.ts';

const GoalSelectConfirmPage = () => {
  const location = useLocation();
  const { id, goalType, image, progressType } = location.state.goal || {};
  console.log(location.state);
  const navigate = useNavigate();
  console.log(id, progressType);

  const [searchParams] = useSearchParams();
  const initStatus = searchParams.get('init') === 'true';

  const handleNavigate = () => {
    console.log(initStatus);
    if (initStatus) {
      navigate('/initial-setup?step=3');
    } else {
      navigate(navigations.GOAL_PRE_CHECK);
    }
  };
  return (
    <MissionCompletionContainer>
      <BackToolbar title=' ' />
      <ContentContainer>
        <ConfirmContent goalType={goalType} image={image} />
      </ContentContainer>
      <ButtonContainer>
        <CustomButton label='네' isValid={true} onClick={handleNavigate} />
      </ButtonContainer>
    </MissionCompletionContainer>
  );
};

export default GoalSelectConfirmPage;

const MissionCompletionContainer = styled.div`
  position: relative;
  padding: 13px 0 32px 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100%;
  max-width: 480px;
  height: 100vh;
  background-color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  margin-top: 37px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin-bottom: 32px;
  padding: 0 16px 0 16px;
  justify-content: center; /* 버튼 가운데 정렬 */
`;
