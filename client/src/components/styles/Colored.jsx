/* eslint-disable import/no-cycle */
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

export const colors = {
  mainDark: '#181924',
  mainDarkTransparent: 'rgba(24, 25, 36, 0.9)',
  mainMedium: '#313244',
  mainText: '#D9D9D9',
  secondText: '#C8C2C2',
  border: '#626262',

  tab: 'rgba(52, 47, 48, 0.8)',
  subsectionSelector: '#575764',
  navHighlight: '#F8B172',
  gutterBackground: '#0D1116',
  gutterForeground: '#6B727D',
  resumeButton: '#188AEB',
  projectListItem: '#53B0FF',
};

export const codeMirrorTxtTheme = createTheme({
  theme: 'light',
  settings: {
    background: 'transparent',
    foreground: `${colors.mainText}`,
    caret: '#5d00ff',
    selection: `${colors.mainMedium}`,
    selectionMatch: `${colors.mainMedium}`,
    lineHighlight: `${colors.mainMedium}`,
    gutterBackground: `${colors.gutterBackground}`,
    gutterForeground: `${colors.gutterForeground}`,
  },
  styles: [
    { tag: t.comment, color: '#787b8099' },
    { tag: t.variableName, color: `${colors.mainText}` },
    { tag: [t.string, t.special(t.brace)], color: `${colors.mainText}` },
    { tag: t.number, color: `${colors.mainText}` },
    { tag: t.bool, color: `${colors.mainText}` },
    { tag: t.null, color: `${colors.mainText}` },
    { tag: t.keyword, color: `${colors.mainText}` },
    { tag: t.operator, color: `${colors.mainText}` },
    { tag: t.className, color: `${colors.mainText}` },
    { tag: t.definition(t.typeName), color: `${colors.mainText}` },
    { tag: t.typeName, color: `${colors.mainText}` },
    { tag: t.angleBracket, color: `${colors.mainText}` },
    { tag: t.tagName, color: `${colors.mainText}` },
    { tag: t.attributeName, color: `${colors.mainText}` },
  ],
});
