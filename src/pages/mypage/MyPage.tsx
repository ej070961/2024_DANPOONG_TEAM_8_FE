import styled from 'styled-components';
import ArrowRightIcon from '../../assets/icon/arrow-right';
import NavBar from '../../components/common/NavBar';
function MyPage() {
  return (
    <Wrapper>
      <ContentContainer>
        <span className='nickname'>단풍님</span>
        <LogoutBtn>
          로그아웃
          <ArrowRightIcon />
        </LogoutBtn>
      </ContentContainer>
      <NavBar />
    </Wrapper>
  );
}

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  max-width: 480px;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.gray100};
`;

const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 5px;
  .nickname {
    ${({ theme }) => theme.fonts.heading_sb_24px};
    color: ${({ theme }) => theme.colors.gray900};
  }
`;

const LogoutBtn = styled.button`
  width: 100%;
  height: 69px;
  border-radius: 30px;
  background: #ffffff;
  display: flex;
  padding: 30px;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => theme.fonts.body_m_18px};
  color: ${({ theme }) => theme.colors.gray900};
`;
