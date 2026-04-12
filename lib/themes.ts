// ─── Theme system ────────────────────────────────────────────────
// Edit currentTheme to switch between available themes.
// Tokens are injected as inline <style> in app/layout.tsx via getThemeCss().

export type ThemeName =
  | 'dark-glass'
  | 'light-fintech'
  | 'dark-neon'
  | 'midnight-pro'
  | 'soft-light'
  | 'foveans';

export const currentTheme: ThemeName = 'foveans';

interface ThemeTokens {
  bg: string;
  bgSurface: string;
  text: string;
  textSec: string;
  accent1: string;
  accent2: string;
  accent3: string;
  glow1: string;
  glow2: string;
}

const themes: Record<ThemeName, ThemeTokens> = {
  foveans: {
    bg:        '#000000',
    bgSurface: 'rgba(255,255,255,0.03)',
    text:      '#F8FAFC',
    textSec:   '#94A3B8',
    accent1:   '#DC2626',
    accent2:   '#991B1B',
    accent3:   '#EF4444',
    glow1:     'rgba(220,38,38,0.4)',
    glow2:     'rgba(153,27,27,0.35)',
  },
  'dark-glass': {
    bg:        '#04040A',
    bgSurface: 'rgba(255,255,255,0.04)',
    text:      '#F1F5F9',
    textSec:   '#94A3B8',
    accent1:   '#3B82F6',
    accent2:   '#8B5CF6',
    accent3:   '#06B6D4',
    glow1:     'rgba(59,130,246,0.35)',
    glow2:     'rgba(139,92,246,0.35)',
  },
  'light-fintech': {
    bg:        '#F8FAFC',
    bgSurface: 'rgba(0,0,0,0.04)',
    text:      '#0F172A',
    textSec:   '#475569',
    accent1:   '#0EA5E9',
    accent2:   '#0284C7',
    accent3:   '#38BDF8',
    glow1:     'rgba(14,165,233,0.25)',
    glow2:     'rgba(2,132,199,0.2)',
  },
  'dark-neon': {
    bg:        '#050510',
    bgSurface: 'rgba(255,255,255,0.03)',
    text:      '#E2E8F0',
    textSec:   '#64748B',
    accent1:   '#A855F7',
    accent2:   '#7C3AED',
    accent3:   '#C084FC',
    glow1:     'rgba(168,85,247,0.4)',
    glow2:     'rgba(124,58,237,0.35)',
  },
  'midnight-pro': {
    bg:        '#0A0A0F',
    bgSurface: 'rgba(255,255,255,0.03)',
    text:      '#E2E8F0',
    textSec:   '#64748B',
    accent1:   '#10B981',
    accent2:   '#059669',
    accent3:   '#34D399',
    glow1:     'rgba(16,185,129,0.35)',
    glow2:     'rgba(5,150,105,0.3)',
  },
  'soft-light': {
    bg:        '#FAFAFA',
    bgSurface: 'rgba(0,0,0,0.03)',
    text:      '#111827',
    textSec:   '#6B7280',
    accent1:   '#F59E0B',
    accent2:   '#D97706',
    accent3:   '#FCD34D',
    glow1:     'rgba(245,158,11,0.3)',
    glow2:     'rgba(217,119,6,0.25)',
  },
};

export function getThemeCss(name: ThemeName): string {
  const t = themes[name];
  return `
    :root {
      --bg:         ${t.bg};
      --bg-surface: ${t.bgSurface};
      --text:       ${t.text};
      --text-sec:   ${t.textSec};
      --accent-1:   ${t.accent1};
      --accent-2:   ${t.accent2};
      --accent-3:   ${t.accent3};
      --glow-1:     ${t.glow1};
      --glow-2:     ${t.glow2};
    }
  `;
}
