import { create } from 'zustand';
import * as React from 'react';

interface TabState {
  activeTab: number;
  setActiveTab: (_event: React.SyntheticEvent, tabIndex: number) => void;
}

export const useTabStore = create<TabState>((set) => ({
  activeTab: 0,
  setActiveTab: (_event: React.SyntheticEvent, tabIndex: number) => set({ activeTab: tabIndex }),
}));
