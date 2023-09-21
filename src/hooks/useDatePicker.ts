import { useState } from 'react';

export const useDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const isRange = () => endDate != null;

  const toString = () => {
    if (isRange()) {
      return `${selectedDate.toLocaleDateString()}~${endDate!.toLocaleDateString()}`;
    }

    return selectedDate.toLocaleDateString();
  }

  return {
    selectedDate,
    setSelectedDate,
    endDate,
    setEndDate,
    isRange,
    toString
  }
}
