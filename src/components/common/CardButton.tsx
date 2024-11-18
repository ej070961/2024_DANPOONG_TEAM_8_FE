import styled from 'styled-components';

interface MissionButtonProps {
  label: string;
  isDisabled: boolean;
  onClick: () => void;
}

const CardButton = ({ label, isDisabled, onClick }: MissionButtonProps) => {
  return (
    <Button $isComplete={isDisabled} onClick={onClick} disabled={isDisabled}>
      {label}
    </Button>
  );
};

export default CardButton;

interface ButtonProps {
  $isComplete: boolean;
}

const Button = styled.button<ButtonProps>`
  font: ${({ theme }) => theme.fonts.body_m_14px};
  background-color: ${({ $isComplete, theme }) => ($isComplete ? '#e6f0fc' : theme.colors.primary)};
  color: ${({ $isComplete }) => ($isComplete ? '#3e7be2' : 'white')};
  border: none;
  border-radius: 13px;
  padding: ${({ $isComplete }) => ($isComplete ? '6px 22px 6px 22px' : '6px 15px 6px 15px')};
`;
