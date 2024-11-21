import { checkList } from '../../apis/mocks/checkList.ts';
import CheckCard from './CheckCard.tsx';
import styled from 'styled-components';
import CustomButton from '../Common/CustomButton.tsx';
import { useState } from 'react';
import { sendCheckListData } from '../../apis/goal.ts';
import LoadingModal from './LoadingModal.tsx';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore.ts';

const CheckCardList = ({ type, areaId }: { type: string; areaId: string }) => {
  const navigate = useNavigate();
  console.log(type, areaId);

  const [isLoading, setIsLoading] = useState(false);
  const checkListData = checkList.find((item) => item.type === type!);
  const [scores, setScores] = useState<number[]>(Array(checkListData?.questions.length).fill(0));

  const { accessToken } = useAuthStore();

  const handleScoreChange = (qId: number, score: number) => {
    setScores((prevScores) => {
      const updatedScores = [...prevScores];
      updatedScores[qId] = score; // 해당 ID에 맞는 점수 업데이트
      return updatedScores;
    });
  };

  const handleSubmit = async () => {
    console.log(scores);

    const res = await sendCheckListData(scores, accessToken!, areaId);

    setIsLoading(true);

    if (res) {
      console.log(res);
      navigate('/analysis-result', {
        state: {
          checkListId: res.id,
        },
      });
    }
  };
  return (
    <>
      <CheckCardListContainer>
        <CheckCardListWrapper>
          {checkListData?.questions.map((check) => (
            <CheckCard
              key={check.id}
              content={check.content}
              onScoreChange={handleScoreChange}
              qId={check.id}
            />
          ))}
        </CheckCardListWrapper>
        <ButtonContainer onClick={handleSubmit}>
          <CustomButton label='완료' isValid={true} />
        </ButtonContainer>
      </CheckCardListContainer>
      {isLoading && <LoadingModal />}
    </>
  );
};

export default CheckCardList;

const CheckCardListContainer = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 30px 30px 0 0;
  background-color: white;
`;

const CheckCardListWrapper = styled.div`
  padding: 46px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 32px;
`;
