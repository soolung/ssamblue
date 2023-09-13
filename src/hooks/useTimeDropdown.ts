import { useState } from 'react';

export const useTimeDropdown = () => {
  const [value, setValue] = useState('전체');
  const [isClicked, setIsClicked] = useState(false);
  const valueList = ['전체', '8교시', '9교시', '10교시', '11교시'];

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
