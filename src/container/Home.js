import React from 'react';
import Button from '../components/Button';
import Package from '../../package.json';
import Github from '../Github';
import styles from './style.scss';

const Home = () => (
  <div className={styles.app}>
    <h1>Quran Common Components {Package.version}</h1>
    <a href="https://github.com/quran/common-components"><Github color="white" className={styles.github} /></a>
    <section>
      <h2>Buttons: </h2>
      <Button>Shuffle Play</Button>
      <Button disabled>Disabled</Button>
    </section>
  </div>);

export default Home;
