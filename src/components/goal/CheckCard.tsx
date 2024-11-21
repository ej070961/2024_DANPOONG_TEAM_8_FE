import styled from 'styled-components';
import Stepper from './Stepper.tsx';
import { useState } from 'react';
interface CheckCardProps {
  qId: number; // 각 카드의 고유 ID
  content: string; // 카드에 표시될 텍스트
  onScoreChange: (qId: number, score: number) => void; // 점수 변경 핸들러
}

const CheckCard = ({ qId, content, onScoreChange }: CheckCardProps) => {
  const [score, setScore] = useState(0);

  const handleScoreChange = (newScore: number) => {
    setScore(newScore + 1); // 로컬 상태 업데이트
    onScoreChange(qId, newScore + 1); // 부모에 점수 전달
  };

  return (
    <CheckCardContainer>
      <CheckText>{content}</CheckText>
      <Stepper score={score} onScoreChange={handleScoreChange} />
    </CheckCardContainer>
  );
};

export default CheckCard;

const CheckCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 30px;
`;

const CheckText = styled.span`
  text-align: center;
  font: ${({ theme }) => theme.fonts.body_m_18px};
  color: ${({ theme }) => theme.colors.gray900};
  height: 36px;
`;
