import styled from 'styled-components';
import HomeIcon from '../../assets/icon/home-icon.tsx';
import MissionIcon from '../../assets/icon/misson-icon.tsx';
import MyIcon from '../../assets/icon/my-icon.tsx';
import PolicyIcon from '../../assets/icon/policy-icon.tsx';
import { useLocation, useNavigate } from 'react-router-dom';
import { navigations } from '../../constant/navigations.ts';
import theme from '../../styles/theme.ts';

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Wrapper>
      <Container>
        <MenuBtn
          $active={location.pathname === navigations.HOME}
          onClick={() => navigate(navigations.HOME, { replace: true })}
        >
          <HomeIcon
            color={
              location.pathname === navigations.HOME ? theme.colors.primary : theme.colors.gray400
            }
          />
          홈
        </MenuBtn>
        <MenuBtn
          $active={location.pathname === navigations.MISSION}
          onClick={() => navigate(navigations.MISSION, { replace: true })}
        >
          <MissionIcon
            color={
              location.pathname === navigations.MISSION
                ? theme.colors.primary
                : theme.colors.gray400
            }
          />
          미션
        </MenuBtn>
        <MenuBtn
          $active={location.pathname === navigations.SUPPORT}
          onClick={() => navigate(navigations.SUPPORT, { replace: true })}
        >
          <PolicyIcon
            color={
              location.pathname === navigations.SUPPORT
                ? theme.colors.primary
                : theme.colors.gray400
            }
          />
          지원제도
        </MenuBtn>
        <MenuBtn $active={false}>
          <MyIcon color={theme.colors.gray400} />
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
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
