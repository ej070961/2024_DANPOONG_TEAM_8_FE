import React, { useState } from 'react';
import styled from 'styled-components';
import check from '../../assets/svg/check.svg';
interface StepperProps {
  score: number;
  onScoreChange: (score: number) => void;
}
const Stepper = ({ onScoreChange }: StepperProps) => {
  const [steps, setSteps] = useState([false, false, false, false]);

  const handleStepClick = (index: number) => {
    setSteps(
      (prevSteps) => prevSteps.map((_, i) => i === index), // 클릭된 Step만 true, 나머지는 false
    );
    onScoreChange(index + 1); //점수 수정
  };

  return (
    <StepperContainer>
      <StepperWrapper>
        {steps.map((checked, index) => (
          <React.Fragment key={index}>
            <Step onClick={() => handleStepClick(index)}>
              <Circle $checked={checked}>{checked ? <img src={check} alt='check' /> : null}</Circle>
            </Step>
            {index < steps.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </StepperWrapper>
      <DescriptionWrapper>
        <Description>전혀 그렇지 않다</Description>
        <Description>매우 그렇다</Description>
      </DescriptionWrapper>
    </StepperContainer>
  );
};

export default Stepper;

const StepperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StepperWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 23px 0 23px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

interface CircleProps {
  $checked: boolean;
}

const Circle = styled.div<CircleProps>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ $checked, theme }) =>
    $checked ? theme.colors.primary : theme.colors.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.gray100}; /* 고정된 디바이더 색상 */
`;

const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 13px;
  padding-right: 11px;
`;

const Description = styled.span`
  color: ${({ theme }) => theme.colors.gray500};
  font: ${({ theme }) => theme.fonts.body_m_12px};
`;
