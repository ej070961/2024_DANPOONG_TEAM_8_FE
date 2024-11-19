import styled from 'styled-components';
import Stepper from './Stepper.tsx';

interface CheckCardProps {
  content: string;
}

const CheckCard = ({ content }: CheckCardProps) => {
  return (
    <CheckCardContainer>
      <CheckText>{content}</CheckText>
      <Stepper />
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
