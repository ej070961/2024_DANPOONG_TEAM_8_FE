import styled from 'styled-components';

type HeaderProps = {
  title: string;
  description: string;
};
function OnboardingHeader({ title, description }: HeaderProps) {
  return (
    <Container>
      <h3 className='title'>{title}</h3>
      <span className='desc'>{description}</span>
    </Container>
  );
}

export default OnboardingHeader;

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
