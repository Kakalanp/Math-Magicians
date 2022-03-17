import React from 'react';
import styles from './Calculator.module.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { total, operation, next } = this.state;
    const buttonList = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    return (
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
            <div key={item.id} className={name} onClick={this.clickHandler} onKeyPress={(e) => { if (e.key === 'Enter') this.clickHandler(); }} role="button" tabIndex={0}>
              <p style={{ userSelect: 'none' }}>{item}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
