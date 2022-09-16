import { useCallback, useState } from 'react';
import { IUseSelectedDates, TDate, TDates } from '../../models/components/datePickerModels';

export const useSelectedDates = ({
  defaultDates = [null, null],
}: IUseSelectedDates): {
  selectedDate: TDate;
  selectedDates: TDates;
  onSetSelectedDate: (date: Date, dates: TDates) => void;
} => {
  const defDates = defaultDates;
  const [selectedDates, setSelectedDates] = useState<TDates>(defDates);

  const onSetSelectedDate = useCallback((date: Date, dates: TDates) => {
    const selectedOutDate = dates ? dates[0] : null;
    const selectedHomeDate = dates.length > 0 ? dates[1] : null;
    if (selectedOutDate === null && selectedHomeDate === null) {
      setSelectedDates([date, null]);
    } else if (selectedOutDate && selectedHomeDate === null) {
      if (selectedOutDate < date) {
        setSelectedDates([selectedOutDate, date]);
      } else {
        setSelectedDates([date, selectedOutDate]);
      }
    } else if (selectedOutDate && selectedHomeDate) {
      setSelectedDates([date, null]);
    }
  }, []);

  const selectedDate = selectedDates ? selectedDates[0] : null;
  return {
    selectedDate,
    selectedDates,
    onSetSelectedDate,
  };
};
