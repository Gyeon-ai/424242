import type { ColorTheme } from '../types/ColorTheme';

export const initialZoom = 30;
export const canvasWidth = 1600;
export const canvasHeight = 900;
export const zoomThreshold = 5;
export const STUCK_DELAY = 5000;
export const HAIR_BORDER = '#afcbde';
export const HAIR_NEON_GOLD = '#edc886';
export const HAIR_BORDER_COLORS = [
  'rgba(175, 203, 222, .96)',
  'rgba(117, 139, 167, .92)',
  'rgba(237, 200, 134, .92)',
  'rgba(255, 224, 160, .94)',
] as const;
export const UI_FONT_FAMILY = `'Pretendard Variable', Pretendard, 'Noto Sans KR', 'Malgun Gothic', 'Apple SD Gothic Neo', system-ui, sans-serif`;
// 오락실 도트 테마의 캔버스용 색과 글꼴(패널 쪽 값은 assets/style.scss의 :root)
export const DOT_LINE = '#7fb0c8';
export const DOT_INK = '#0f1a24';
export const DOT_TEXT_SOFT = '#cfe6f0';
export const DOT_ACCENT = '#f2cf6b';
export const DOT_RED = '#d98a3a';
export const NAME_FONT_FAMILY = `'Noto Sans KR', sans-serif`;
export const DOT_FONT_FAMILY = `'Galmuri11', 'Noto Sans KR', sans-serif`;
export const NUMBER_FONT_FAMILY = `'Press Start 2P', 'Galmuri11', monospace`;
export const WINNER_NAME_FONT_FAMILY = `'Do Hyeon', 'Noto Sans KR', sans-serif`;

export enum Skills {
  None,
  Impact,
}

export const Themes: Record<string, ColorTheme> = {
  light: {
    background: '#eee',
    marbleLightness: 50,
    marbleWinningBorder: 'black',
    skillColor: '#69c',
    coolTimeIndicator: '#999',
    entity: {
      box: {
        fill: '#226f92',
        outline: 'black',
        bloom: HAIR_NEON_GOLD,
        bloomRadius: 0,
      },
      circle: {
        fill: 'yellow',
        outline: '#ed7e11',
        bloom: 'yellow',
        bloomRadius: 0,
      },
      polyline: {
        fill: 'white',
        outline: 'black',
        bloom: HAIR_NEON_GOLD,
        bloomRadius: 0,
      },
    },
    rankStroke: 'black',
    minimapBackground: '#fefefe',
    minimapViewport: '#6699cc',

    winnerBackground: 'rgba(255, 255, 255, 0.5)',
    winnerOutline: 'black',
    winnerText: '#cccccc',
  },
  dark: {
    background: 'black',
    marbleLightness: 75,
    marbleWinningBorder: 'white',
    skillColor: 'white',
    coolTimeIndicator: 'red',
    entity: {
      box: {
        fill: HAIR_NEON_GOLD,
        outline: HAIR_NEON_GOLD,
        bloom: HAIR_NEON_GOLD,
        bloomRadius: 15,
      },
      circle: {
        fill: 'yellow',
        outline: 'yellow',
        bloom: 'yellow',
        bloomRadius: 15,
      },
      polyline: {
        fill: 'white',
        outline: 'white',
        bloom: HAIR_NEON_GOLD,
        bloomRadius: 15,
      },
    },
    rankStroke: '',
    minimapBackground: '#333333',
    minimapViewport: HAIR_BORDER,
    winnerBackground: 'rgba(15, 26, 36, 0.9)',
    winnerOutline: '',
    winnerText: 'white',
  },
};
