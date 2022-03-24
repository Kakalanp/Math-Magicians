import calculate from '../logic/calculate';

it('clears succesfully', () => {
  expect(calculate({ total: '200', next: '20', operation: 'x' }, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
});

it('adds numbers succesfully with a number present', () => {
  expect(calculate({ next: '20' }, '2')).toStrictEqual({ total: null, next: '202' });
});

it('adds numbers succesfully without a number present', () => {
  expect(calculate({}, '2')).toStrictEqual({ total: null, next: '2' });
});

it('adds numbers succesfully if there is an operation selected', () => {
  expect(calculate({ next: '20', operation: '+' }, '2')).toStrictEqual({ next: '202', operation: '+' });
});

it('adds decimals succesfully', () => {
  expect(calculate({ next: '20', operation: 'null' }, '.2')).toStrictEqual({ next: '20.2', operation: 'null' });
});

it('wont add extra dots', () => {
  expect(calculate({ next: '20.2', operation: 'null' }, '.')).toStrictEqual({ next: '20.2', operation: 'null' });
});

it('adds decimals with an operation succesfully', () => {
  expect(calculate({ next: '0', operation: '+' }, '.')).toStrictEqual({ next: '0.', operation: '+' });
});

it('adds decimals without a number selected', () => {
  expect(calculate({}, '.')).toStrictEqual({ total: '0.' });
});

it('can operate succesfully', () => {
  expect(calculate({ total: '200', next: '20', operation: 'x' }, '=')).toStrictEqual({ total: '4000', next: null, operation: null });
});

it('can operate in succession', () => {
  expect(calculate({ total: '200', next: '20', operation: 'x' }, 'x')).toStrictEqual({ total: '4000', next: null, operation: 'x' });
});

it('inverts succesfully on total', () => {
  expect(calculate({ total: '200', operation: 'x' }, '+/-')).toStrictEqual({ total: '-200', operation: 'x' });
});

it('inverts succesfully on second number', () => {
  expect(calculate({ next: '20', operation: 'x' }, '+/-')).toStrictEqual({ next: '-20', operation: 'x' });
});

it('can add an operation with a present number succesfully', () => {
  expect(calculate({ total: '10' }, 'x')).toStrictEqual({ total: '10', operation: 'x' });
});

it('can add an operation without a present number succesfully', () => {
  expect(calculate({}, 'x')).toStrictEqual({ operation: 'x' });
});

it('can change an operation succesfully', () => {
  expect(calculate({ total: '0', operation: 'x' }, '-')).toStrictEqual({ total: '0', operation: '-' });
});

it('switches numbers succesfully', () => {
  expect(calculate({ total: '0', next: '20' }, 'x')).toStrictEqual({ total: '20', next: null, operation: 'x' });
});

it('does not add multiple zeros without a number present', () => {
  expect(calculate({ total: '0', next: '0' }, '0')).toStrictEqual({});
});

it('does nothing without a valid operation on input =', () => {
  expect(calculate({ total: '0', next: '0' }, '=')).toStrictEqual({});
});

it('does nothing without a valid number on input +/-', () => {
  expect(calculate({}, '+/-')).toStrictEqual({});
});
