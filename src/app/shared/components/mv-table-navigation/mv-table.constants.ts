import { ArrowEvents } from './mv-table-navigation.enums';
import { JumpItem } from './mv-table-navigation.interfaces';

export const images: JumpItem[] = [
  {
    uri: 'assets/images/icons/start.svg',
    type: ArrowEvents.First,
    title: 'First move'
  }, {
    uri: 'assets/images/icons/back.svg',
    type: ArrowEvents.Prev,
    title: 'Previous move'
  }, {
    uri: 'assets/images/icons/next.svg',
    type: ArrowEvents.Next,
    title: 'Next move'
  }, {
    uri: 'assets/images/icons/end.svg',
    type: ArrowEvents.Last,
    title: 'Last move'
}];
