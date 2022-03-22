import React from 'react';
import styles from './Quote.module.css';

export default function Quote() {
  return (
    <div className={styles.page}>
      <h2>
        As William Thurston said,
        “mathematics is not about numbers, equations, computations or algorithms;
        it&#39;s about understanding.”
      </h2>
    </div>
  );
}
