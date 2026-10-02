import { create } from 'zustand';

export type CursorMode = 'default' | 'link' | 'project' | 'view';
export type ThemeMode = 'dark' | 'light';

interface UIState {
  isMenuOpen: boolean;
  cursorMode: CursorMode;
  activeProject: string | null;
  theme: ThemeMode;
  setMenuOpen: (isOpen: boolean) => void;
  setCursorMode: (mode: CursorMode) => void;
  setActiveProject: (project: string | null) => void;
  setTheme: (theme: ThemeMode) => void;
}

export const useUIStore = create<UIState>((set) => ({
  isMenuOpen: false,
  cursorMode: 'default',
  activeProject: null,
  theme: document.documentElement.dataset.theme === 'light' ? 'light' : 'dark',
  setMenuOpen: (isMenuOpen) => set({ isMenuOpen }),
  setCursorMode: (cursorMode) => set({ cursorMode }),
  setActiveProject: (activeProject) => set({ activeProject }),
  setTheme: (theme) => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The selected theme remains active for this page even when storage is unavailable.
    }
    set({ theme });
  },
}));
