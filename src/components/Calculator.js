import { React, useState } from 'react';
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

  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__result}>
        <p>
          { total }
          { operation }
          { next }
        </p>
      </div>
      {/* All buttons needed to have a keypress, role, and tabIndex to pass ESlint */}
      {/* None <p> element is focusable, excepting the result one */}
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>AC</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>+/-</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>%</p>
      </div>
      <div className={styles.calculator__button__orange} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>÷</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>7</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>8</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>9</p>
      </div>
      <div className={styles.calculator__button__orange} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>x</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>4</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>5</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>6</p>
      </div>
      <div className={styles.calculator__button__orange} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>-</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>1</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>2</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>3</p>
      </div>
      <div className={styles.calculator__button__orange} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>+</p>
      </div>
      <div className={`${styles.calculator__button__grey} ${styles.calculator__button__zero}`} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>0</p>
      </div>
      <div className={styles.calculator__button__grey} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>.</p>
      </div>
      <div className={styles.calculator__button__orange} onClick={clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') clickHandler(); }} role="button" tabIndex={0}>
        <p style={{ userSelect: 'none' }}>=</p>
      </div>
    </div>
  );
}
