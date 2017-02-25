import React from 'react';
import Button from '../components/Button';
import Package from '../../package.json';
import Github from '../Github';
import styles from './style.scss';

const Home = () => (
  <div className={styles.app}>
    <h1>Quran Common Components {Package.version}</h1>
    <a href="https://github.com/quran/common-components"><Github className={styles.github} /></a>
    <hr />
    <section>
      <Button>Button Example</Button>
    </section>
  </div>);

export default Home;
