import { ArrowEvents } from '@core/enums/chess-events.enumn';
import { IChessEvent } from '@core/interfaces/chess-events.interfaces';

export const images: IChessEvent[] = [
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
