export type ThemeType = 'dark' | 'light';
export type ThemeColors = 'primary' | 'danger' | 'light' | 'secondary';

export type CMuSyUIThemeContext = {
  type: ThemeType | string;
  isDark?: boolean;
};
