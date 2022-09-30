import dayjs, { ManipulateType, OpUnitType } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import { date } from '../../../types';
dayjs.extend(isBetween);

type DateFormatProps = 'YY-MM-DD' | 'YYYY MMMM';

export const dateFormat = (d: date | undefined, f: DateFormatProps): string => dayjs(d).format(f);

export const dateIsSame = (d: date | undefined, s: date | undefined, q: OpUnitType): boolean =>
  dayjs(d).isSame(dayjs(s), q);

export const dateIsBefore = (d: date | undefined, s: date | undefined): boolean => dayjs(d).isBefore(dayjs(s));

export const dateAdd = (d: date | undefined, n: number, q: ManipulateType): date => dayjs(d).add(n, q);

export const dateSubtract = (d: date | undefined, n: number, q: ManipulateType): date => dayjs(d).subtract(n, q);

export const dateIsBetween = (d: date | undefined, s: date | undefined, e: date | undefined): boolean =>
  dayjs(d).isBetween(dayjs(s), dayjs(e));
