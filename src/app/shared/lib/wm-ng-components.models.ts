export * from './config/colors';

export const WM_COLORS = {
  // UI colors
  wmAubergine1: '#9b5c81',
  wmAubergine2: '#682a4e',
  wmAubergine3: '#36122e',
  wmBlue1: '#b5c1de',
  wmBlue2: '#333f57',
  wmBlue3: '#778fc5',
  wmBlue4: '#244ca4',
  wmBlue5: '#1d1d24',
  wmBlue6: '#a3b4d8',
  wmBlue7: '#ced3e0',
  wmBlue8: '#292936',
  wmBlue9: '#616161',

  // Black & Grey
  wmWhite: '#ffffff',
  wmGrey1: '#f3f4f7',
  wmGrey2: '#d7d7e0',
  wmGrey3: '#acacbb',
  wmGrey4: '#757585',
  wmGrey5: '#b8b8c6',
  wmGrey6: '#b3b3b3',
  wmGrey7: '#273247',
  wmGrey8: '#1c1b21',
  wmGrey9: '#e5e6eb',

  // System messaging colours
  wmRed1: '#fbe4e5',
  wmRed2: '#f59099',
  wmRed3: '#f0516d',
  wmRed4: '#e74854',
  wmRed5: '#f5b5ba',
  wmRed6: '#edd8d9',
  wmRed7: '#d2414c',
  wmGreen1: '#eaf7f1',
  wmGreen2: '#47a68c',
  wmGreen3: '#b9dfd3',
  wmGreen4: '#218F71',

  // Data visualisation extended pallette
  wmYellow1: '#f4deb9',
  wmYellow2: '#f6ca7c',
  wmYellow3: '#f8af2a',
  wmOrange1: '#ffe5da',
  wmOrange2: '#f9cbb7',
  wmOrange3: '#f39f79',
  wmOrange4: '#ed6b31',
  wmOrange5: '#f1572f',
  wmPurple1: '#cdc5e5',
  wmPurple2: '#a796d4',
  wmPurple3: '#7559bc',
};

export const WM_CHART_COLORS = {
  wmYellow1: WM_COLORS.wmYellow1,
  wmYellow2: WM_COLORS.wmYellow2,
  wmYellow3: WM_COLORS.wmYellow3,
  wmOrange1: WM_COLORS.wmOrange1,
  wmOrange2: WM_COLORS.wmOrange2,
  wmOrange3: WM_COLORS.wmOrange3,
  wmOrange4: WM_COLORS.wmOrange4,
  wmPurple1: WM_COLORS.wmPurple1,
  wmPurple2: WM_COLORS.wmPurple2,
  wmPurple3: WM_COLORS.wmPurple3,
};

export enum TooltipPosition {
  LEFT = 'left',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  TOP = 'top',
  NONE = 'none',
}

export enum TooltipType {
  DESCRIPTION_LONG = 'description-long',
  STANDARD = 'standard',
  DESCRIPTION = 'description',
  TITLED = 'titled',
  DATA_TOOLTIP = 'data-tooltip',
  OPPORTUNITIES_CALIBRATION = 'opportunities-calibration',
  VALIDATION = 'validation',
  AUDIENCE_BUILDER = 'audience-builder',
  USER_POPOVER = 'user-popover',
}

export enum CardType {
  APPS_CARD = 'apps',
  WORKSPACE_CARD = 'workspace',
}
