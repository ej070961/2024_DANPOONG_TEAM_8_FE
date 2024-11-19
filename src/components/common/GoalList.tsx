import styled from 'styled-components';
import washer from '../../assets/images/washer.png';
import door from '../../assets/images/door.png';
import money from '../../assets/images/money.png';
import clean from '../../assets/images/clean.png';
import DoneCard from '../Common/DoneCard.tsx';
import { useNavigate } from 'react-router-dom';

const goalList = [
  {
    id: 1,
    goalType: '일상생활기술',
    image: washer,
    progressType: '진행중',
  },
  {
    id: 2,
    goalType: '자기관리기술',
    image: clean,
    progressType: '완료',
  },
  {
    id: 3,
    goalType: '돈관리기술',
    image: money,
    progressType: '진행전',
  },
  {
    id: 4,
    goalType: '사회진출기술',
    image: door,
    progressType: '진행전',
  },
];

interface GoalListProps {
  enabled: boolean;
  init: boolean;
}

const GoalList = ({ enabled, init }: GoalListProps) => {
  const navigate = useNavigate();
  const handleNavigate = (id: number) => {
    const goal = goalList.find((goal) => goal.id === id);
    init
      ? navigate('/goal/confirm?init=true', { state: { goal } })
      : navigate('/goal/confirm?init=false', { state: { goal } });
  };

  return (
    <GoalListContainer>
      {goalList.map((goal) => (
        <GoalContainer key={goal.id} onClick={enabled ? () => handleNavigate(goal.id) : undefined}>
          {goal.progressType !== '진행전' ? (
            <DoneCardWrapper>
              <DoneCard label={goal.progressType} />
            </DoneCardWrapper>
          ) : null}
          <Image src={goal.image} alt={goal.goalType} />
          <GoalTypeText>{goal.goalType}</GoalTypeText>
        </GoalContainer>
      ))}
    </GoalListContainer>
  );
};

export default GoalList;

const GoalListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  & > div {
    flex: 0 1 calc(50% - 12px);
    max-width: 210px;
    box-sizing: border-box;
  }
`;

const DoneCardWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
`;

const Image = styled.img`
  width: 130px;
  height: 130px;
  margin-top: 20px;
`;

const GoalContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 210px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const GoalTypeText = styled.div`
  margin-top: 6px;
  font: ${({ theme }) => theme.fonts.body_sb_18px};
  color: ${({ theme }) => theme.colors.gray900};
`;
