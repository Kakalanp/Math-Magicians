import { useState } from 'react';
import styles from './Calculator.module.css';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [total, setTotal] = useState(0);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  function clickHandler(e) {
    const result = calculate({ total, next, operation }, e.target.textContent);
    setTotal(result.total);
    setNext(result.next);
    setOperation(result.operation);
  }
  const buttonList = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
  return (
    <div className={styles.page}>
      <div className={styles.text}>
        <p>Lets do some math!</p>
      </div>
      <div className={styles.calculator}>
        <div className={styles.calculator__result}>
          <p>
            {total}
            {' '}
            {operation}
            {' '}
            {next}
          </p>
        </div>
        {buttonList.map((item, index) => {
          let name = styles.calculator__button__grey;
          if ((index + 1) % 4 === 0 || index === 18) { name = styles.calculator__button__orange; }
          if (index === 16) { name = `${styles.calculator__button__grey} ${styles.calculator__button__zero}`; }
          return (
            <div key={item.id} className={name} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
              <p style={{ userSelect: 'none' }}>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
