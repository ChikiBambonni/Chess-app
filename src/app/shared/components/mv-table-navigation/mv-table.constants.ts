import { MvNavigationEvents } from './mv-table-navigation.enums';
import { JumpItem } from './mv-table-navigation.interfaces';

export const images: JumpItem[] = [
  {
    uri: 'assets/images/icons/flip.svg',
    type: MvNavigationEvents.Flip,
    title: 'Flip the board'
  }, {
    uri: 'assets/images/icons/start.svg',
    type: MvNavigationEvents.First,
    title: 'First move'
  }, {
    uri: 'assets/images/icons/back.svg',
    type: MvNavigationEvents.Prev,
    title: 'Previous move'
  }, {
    uri: 'assets/images/icons/next.svg',
    type: MvNavigationEvents.Next,
    title: 'Next move'
  }, {
    uri: 'assets/images/icons/end.svg',
    type: MvNavigationEvents.Last,
    title: 'Last move'
}];
