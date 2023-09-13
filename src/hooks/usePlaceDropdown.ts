import { useState } from 'react';

export const usePlaceDropdown = () => {
  const [value, setValue] = useState('전체');
  const [isClicked, setIsClicked] = useState(false);
  const valueList = ['전체', '프로그래밍1실', '프로그래밍2실', '학생회실', '모둠학습실', '베르1실', '베르2실', '베르3실', '베르4실', '베르5실', '베르6실', '베르7실', '베르8실', '베르9실', '객체지향프로그래밍실', '데이터네트워크실', '모바일프로그래밍실', '소프트웨어공학실'];

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
