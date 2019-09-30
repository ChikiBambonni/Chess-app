import { ArrowEvents } from '@core/enums/chess-events.enumn';

export interface IChessEvent {
  uri: string;
  type: ArrowEvents;
}
