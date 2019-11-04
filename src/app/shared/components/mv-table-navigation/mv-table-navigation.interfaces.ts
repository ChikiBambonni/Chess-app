import { ArrowEvents } from './mv-table-navigation.enums';

export interface JumpItem {
  uri: string;
  type: ArrowEvents;
  title: string;
}
