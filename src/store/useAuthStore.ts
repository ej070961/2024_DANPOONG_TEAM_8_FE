import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type AuthStore = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;

  accessToken: string | null;
  refreshToken: string | null;
  nickname: string | null;

  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  setNickname: (nickname: string) => void;
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
        }),
      accessToken: '',
      refreshToken: '',
      nickname: '',
      setAccessToken: (accessToken) => set({ accessToken }),
      setRefreshToken: (refreshToken) => set({ refreshToken }),
      setNickname: (nickname) => set({ nickname }),
    }),
    {
      name: 'user-storage',
    },
  ),
);
