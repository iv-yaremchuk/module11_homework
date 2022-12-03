// Создаем функцию, которая возвращает результат,
// соответствующий переданным процентам от числа,
// например, 10% от 100 соответствует 10,
// дробные числа округляются до сотых, функция
// экспортируется для проведения тестов
export function getPercents(percent, number) {
  if (typeof percent === 'number' && typeof number === 'number') {
    return +((number / 100) * percent).toFixed(2);
  } else {
    return 'Только числа!';
  }
}
