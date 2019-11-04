import { MvNavigationEvents } from './mv-table-navigation.enums';

export interface JumpItem {
  uri: string;
  type: MvNavigationEvents;
  title: string;
}
