export type ThemeType = 'dark' | 'light';
export type ThemeColors = 'primary' | 'secondary' | 'danger';

export type CMuSyUIThemeContext = {
  type: ThemeType | string;
  isDark?: boolean;
};
