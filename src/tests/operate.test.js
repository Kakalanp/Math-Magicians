import operate from '../logic/operate';

it('sums succesfully', () => {
  expect(operate('17', '6', '+')).toBe('23');
});

it('subtracts succesfully', () => {
  expect(operate('99', '98', '-')).toBe('1');
});

it('multiplies succesfully', () => {
  expect(operate('421', '3', 'x')).toBe('1263');
});

it('divides succesfully', () => {
  expect(operate('1263', '210.5', '÷')).toBe('6');
});

it('refuses to divide by 0', () => {
  expect(operate('4', '0', '÷')).toBe('Can\'t divide by 0.');
});

it('modules correctly', () => {
  expect(operate('200', '200', '%')).toBe('0');
});

it('refuses to module by 0', () => {
  expect(operate('123', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
});

it('Needs a valid operator', () => {
  expect(() => operate('123', '0', undefined)).toThrow("Unknown operation 'undefined'");
});
