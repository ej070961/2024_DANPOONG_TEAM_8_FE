import { useEffect } from 'react';
import { useAuthStore } from '../../store/useAuthStore';
import { axiosInstance } from '../../apis';
import { useNavigate } from 'react-router-dom';
import { navigations } from '../../constant/navigations';

function Auth() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  useEffect(() => {
    const fetchLogin = async () => {
      const query = new URLSearchParams(location.search);
      const accessToken = query.get('token');
      const refreshToken = query.get('refreshToken');
      const hasCharacter = query.get('hasCharacter');
      const nickname = query.get('nickname');
      const kakaoId = query.get('kakaoId');

      if (accessToken && refreshToken && hasCharacter && nickname && kakaoId) {
        useAuthStore.setState({
          accessToken: accessToken,
          refreshToken: refreshToken,
          kakaoId: kakaoId,
          nickname: nickname,
        });
        login();
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

        if (hasCharacter === 'true') {
          navigate(navigations.ONBOARDING);
        } else {
          navigate(navigations.INITIALSETUP);
          localStorage.setItem('init', 'True');
        }
      }
    };
    fetchLogin();
  }, [location.search, navigate]);
  return <div></div>;
}

export default Auth;
