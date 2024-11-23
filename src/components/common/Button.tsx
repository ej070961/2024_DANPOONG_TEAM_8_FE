import styled from 'styled-components';
interface ButtonProps {
  disabled?: boolean;
  text: string;
  onClick: () => void;
}
function Button({ disabled, text, onClick }: ButtonProps) {
  return (
    <ButtonWrapper>
      <Container $disabled={disabled} onClick={onClick}>
        {text}
      </Container>
    </ButtonWrapper>
  );
}

export default Button;
const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 15px;
  width: 100%;
  max-width: 480px;
  padding: 0 16px 0 16px;
`;

const Container = styled.button<{ $disabled?: boolean }>`
  width: 100%;
  height: 60px;
  border-radius: 18px;

  ${({ theme }) => theme.fonts.body_m_18px};
  color: #ffffff;

  ${({ $disabled, theme }) =>
    $disabled ? `background: ${theme.colors.gray300}` : `background: ${theme.colors.primary}`}
`;
