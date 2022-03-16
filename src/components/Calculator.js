import React from 'react';
import styles from './Calculator.module.css';

export default function Calculator() {
  return (
    <div className={styles.calculator}>
      <div className={styles.calculator__input}>
        <p>0</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>AC</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>+/-</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>%</p>
      </div>
      <div className={styles.calculator__button__orange}>
        <p>÷</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>7</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>8</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>9</p>
      </div>
      <div className={styles.calculator__button__orange}>
        <p>x</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>4</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>5</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>6</p>
      </div>
      <div className={styles.calculator__button__orange}>
        <p>-</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>1</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>2</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>3</p>
      </div>
      <div className={styles.calculator__button__orange}>
        <p>+</p>
      </div>
      <div className={`${styles.calculator__button__grey} ${styles.calculator__button__zero}`}>
        <p>0</p>
      </div>
      <div className={styles.calculator__button__grey}>
        <p>.</p>
      </div>
      <div className={styles.calculator__button__orange}>
        <p>=</p>
      </div>
    </div>
  );
}
