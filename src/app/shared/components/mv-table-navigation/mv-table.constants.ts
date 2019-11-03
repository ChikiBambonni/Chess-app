import { ArrowEvents } from './mv-table-navigation.enums';
import { ChessEvent } from './mv-table-navigation.interfaces';

export const images: ChessEvent[] = [
  {
    uri: 'assets/images/icons/start.svg',
    type: ArrowEvents.First
  }, {
    uri: 'assets/images/icons/back.svg',
    type: ArrowEvents.Prev
  }, {
    uri: 'assets/images/icons/next.svg',
    type: ArrowEvents.Next
  }, {
    uri: 'assets/images/icons/end.svg',
    type: ArrowEvents.Last
}];
