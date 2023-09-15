export const convertHead = (head: string[]) => {
  return [
    {
      name: '학번',
      size: ''
    }, {
      name: '이름',
      size: ''
    },
    ...head.map(h => {
      return {
        name: h,
        size: ''
      }
    })
  ];
}
