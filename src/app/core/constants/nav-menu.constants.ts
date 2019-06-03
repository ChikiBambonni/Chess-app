import { ToolsItem } from '@core/interfaces/nav-menu.interfaces';

export const gameMenuItems: string[] = [
  'checkers',
  'chess'
];

export const toolsMenuItems: ToolsItem[] = [
  {
    title: 'Analysis board',
    uri: '/opening#explorer'
  }, {
    title: 'Opening explorer',
    uri: '/opening#explorer'
  }
];
