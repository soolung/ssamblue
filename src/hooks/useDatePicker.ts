import { useState } from 'react';

export const useDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const isRange = () => endDate != null;

  return {
    selectedDate,
    setSelectedDate,
    endDate,
    setEndDate,
    isRange
  }
}
