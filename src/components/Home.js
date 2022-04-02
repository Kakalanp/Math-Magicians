import React from 'react';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Welcome to our page</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Impedit iusto eum fugit magnam?
        In esse dolorum quos odio nisi obcaecati,
        voluptatibus commodi facere expedita, impedit odit fugit, a sed maxime?
        <br />
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Impedit iusto eum fugit magnam?
        In esse dolorum quos odio nisi obcaecati,
        voluptatibus commodi facere expedita, impedit odit fugit, a sed maxime?
      </p>
    </div>
  );
}
