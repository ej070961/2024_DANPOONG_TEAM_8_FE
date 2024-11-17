import { DefaultTheme } from "styled-components";

// 폰트 스타일과 컬러를 정의하는 함수들
const createFontStyle = (family: string, weight: number, size: number, lineHeight: number) => `
  font-family: "${family}";
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}%;
  letter-spacing: -2.5%;
`;

// 폰트 정의
const fonts = {
  sb_30px: createFontStyle("Pretendard", 600, 30, 140),
  heading_sb_24px: createFontStyle("Pretendard", 600, 24, 140),
  heading_sb_22px: createFontStyle("Pretendard", 600, 22, 140),
  heading_sb_20px: createFontStyle("Pretendard", 600, 20, 140),
  heading_b_30px: createFontStyle("Pretendard", 700, 30, 140),
  body_sb_18px: createFontStyle("Pretendard", 600, 18, 140),
  body_m_18px: createFontStyle("Pretendard", 500, 18, 140),
  body_m_16px: createFontStyle("Pretendard", 500, 16, 140),
  body_m_14px: createFontStyle("Pretendard", 500, 14, 140),
  body_r_18px: createFontStyle("Pretendard", 400, 18, 140),
  body_m_12px: createFontStyle("Pretendard", 500, 12, 140),
};

// 컬러 정의
const colors = {
  gray900: "#18181b",
  gray800: "#27272a",
  gray700: "#3f3f46",
  gray600: "#52525b",
  gray500: "#71717a",
  gray400: "#a1a1aa",
  gray300: "#d4d4d8",
  gray200: "#e4e4e7",
  gray100: "#f4f4f5",
  primary: "#7676ff",
  primary_lighten100: "#8787f2",
  primary_lighten200: "#a5a5fd",
  primary_lighten300: "#cacaff",
  primary_lighten400: "#e9e9ff",
  primary_darken100: "#5656DC",
};

export type FontsTypes = typeof fonts;
export type ColorsTypes = typeof colors;

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
