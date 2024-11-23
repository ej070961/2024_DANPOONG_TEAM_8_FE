import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthStore = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;

  accessToken: string | null;
  refreshToken: string | null;
  nickname: string | null;
  kakaoId: string | null;

  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setNickname: (nickname: string) => void;
  setKakaoId: (kakaoId: string) => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => set({ isLoggedIn: true }),
      logout: () =>
        set({
          isLoggedIn: false,
          accessToken: null,
          refreshToken: null,
          kakaoId: null,
          nickname: null,
        }),
      accessToken: '',
      refreshToken: '',
      nickname: '',
      kakaoId: '',
      setAccessToken: (accessToken) => set({ accessToken }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setNickname: (nickname) => set({ nickname }),
      setKakaoId: (kakaoId) => set({ kakaoId }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
