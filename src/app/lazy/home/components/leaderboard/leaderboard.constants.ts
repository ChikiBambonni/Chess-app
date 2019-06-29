import { ButtonInterface } from '@shared/components/button-group/button-group.interfaces';
import { LiderboardType } from './leaderboard.enums';

export const ButtonsList: ButtonInterface<LiderboardType>[] = [
  {
    label: 'FIDE',
    value: LiderboardType.FIDE
  }, {
    label: 'APP',
    value: LiderboardType.APP
  },
];
