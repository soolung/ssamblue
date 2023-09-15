import { useState } from 'react';
import { DEFAULT_VALUE } from '@/constants/dropdown';

export const useDropdown = (valueList: string[]) => {
  const [value, setValue] = useState(DEFAULT_VALUE);
  const [isClicked, setIsClicked] = useState(false);

  const toggle = () => setIsClicked(!isClicked);
  const select = (value: string) => {
    setValue(value);
    toggle();
  }

  return {
    value,
    valueList,
    isClicked,
    toggle,
    select
  }
}
