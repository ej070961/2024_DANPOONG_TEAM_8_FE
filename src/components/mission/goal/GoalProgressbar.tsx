import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import styled from 'styled-components';
import theme from '../../../styles/theme.ts';
import { useEffect, useState } from 'react';

interface GoalProgressbarProps {
  value: number;
}

const GoalProgressbar = ({ value }: GoalProgressbarProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [phase, setPhase] = useState<'up' | 'down' | 'target'>('up'); // 애니메이션 단계 관리

  useEffect(() => {
    let interval: number;

    if (phase === 'up') {
      interval = setInterval(() => {
        setCurrentValue((prevValue) => {
          if (prevValue >= 100) {
            setPhase('down');
            return 100;
          }
          return prevValue + 1;
        });
      }, 3);
    } else if (phase === 'down') {
      interval = setInterval(() => {
        setCurrentValue((prevValue) => {
          if (prevValue <= 0) {
            setPhase('target');
            return 0;
          }
          return prevValue - 1;
        });
      }, 5);
    } else if (phase === 'target') {
      interval = setInterval(() => {
        setCurrentValue((prevValue) => {
          if (prevValue >= value) {
            clearInterval(interval);
            return value;
          }
          return prevValue + 1;
        });
      }, 10);
    }

    return () => clearInterval(interval);
  }, [phase, value]);

  return (
    <HalfCircleWrapper>
      <CircularProgressbarWithChildren
        value={currentValue}
        maxValue={100}
        circleRatio={0.5}
        styles={buildStyles({
          rotation: 0.75,
          strokeLinecap: 'round',
          trailColor: theme.colors.gray200,
          pathColor: theme.colors.primary,
        })}
      >
        <ProgressRate>{`${value}%`}</ProgressRate>
      </CircularProgressbarWithChildren>
    </HalfCircleWrapper>
  );
};

export default GoalProgressbar;

const HalfCircleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 90px;
  height: 41px;
`;

const ProgressRate = styled.div`
  font: ${({ theme }) => theme.fonts.body_sb_18px};
  color: ${({ theme }) => theme.colors.gray900};
  padding-bottom: 20px;
`;
