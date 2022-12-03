// Импортируем функцию для проведения 3х тестов: 
// 1. проверяем корректность подсчётов
// 2. проверяем округление до сотых
// 3. проверяем реакцию на неккоректный ввод
import { getPercents } from './percents.js';

describe('multiply test for getPercent function', () => {
  it('60 is 30% of 200', () => {
    expect(getPercents(30, 200)).toBe(60);
  }),
  it('1.65 is 10.5% of 15.67', () => {
    expect(getPercents(10.5, 15.67)).toBe(1.65);
  });
  it('if persent or number is not a number', () => {
    expect(getPercents('fsdf', 100)).toBe('Только числа!');
  });
});
