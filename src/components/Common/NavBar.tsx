import styled from 'styled-components';
import HomeIcon from '../../assets/icon/home-icon';
import MissionIcon from '../../assets/icon/misson-icon';
import MyIcon from '../../assets/icon/my-icon';
import PolicyIcon from '../../assets/icon/policy-icon';
function NavBar() {
  return (
    <Wrapper>
      <Container>
        <MenuBtn $active={false}>
          <HomeIcon color={'#a1a1aa'} />홈
        </MenuBtn>
        <MenuBtn $active={false}>
          <MissionIcon color={'#a1a1aa'} />
          미션
        </MenuBtn>
        <MenuBtn $active={false}>
          <PolicyIcon color={'#a1a1aa'} />
          지원제도
        </MenuBtn>
        <MenuBtn $active={false}>
          <MyIcon color={'#a1a1aa'} />
          마이
        </MenuBtn>
      </Container>
    </Wrapper>
  );
}

export default NavBar;

const Wrapper = styled.nav`
  position: fixed;
  bottom: 10px;
  width: 100vw;
  max-width: 480px;
  padding: 0 48px 15px 48px;
`;
const Container = styled.div`
  width: 100%;
  height: 68px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);

  display: flex;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
`;

const MenuBtn = styled.button<{ $active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  width: 70px;
  padding: 0;

  ${({ theme }) => theme.fonts.body_m_14px};
  color: ${({ $active, theme }) => ($active ? theme.colors.primary : theme.colors.gray400)};
`;
