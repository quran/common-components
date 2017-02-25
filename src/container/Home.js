import React from 'react';
import Button from '../../components/Button';
import Package from '../../package.json';
import styles from './style.scss';

const Home = () => (
  <div className={styles.app}>
    <h1>Quran Common Components {Package.version}</h1>
    <hr />
    <section>
      <Button>Button Example</Button>
    </section>
  </div>);

export default Home;
