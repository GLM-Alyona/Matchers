import sortMatchers from '../matchers';

test('test sortMatchers function', () => {
  const result = sortMatchers([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'танкист', health: 80 },
  ]);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'танкист', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});
