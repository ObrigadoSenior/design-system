import { date } from '../../../types';
import { dateGetSunday } from './dates';

interface MapDatesProps {
  amount: number;
  month: date;
}

interface MapDatesReturnProps {
  d: date;
  i: number;
}

export const mapDates = ({ amount, month }: MapDatesProps): MapDatesReturnProps[] => {
  const sunday = dateGetSunday(month);
  return new Array(amount).fill(sunday).map((d, i) => {
    return { d, i };
  });
};
