import React from 'react';
import Button from '../components/Button';
import Package from '../../package.json';
import Github from '../Github';
import styles from './style.scss';

const Home = () => (
  <div className={styles.app}>
    <a href="https://github.com/quran/common-components"><Github color="white" className={styles.github} /></a>
    <a href="https://www.npmjs.com/package/quran-components" className={styles.version}>{Package.version}</a>

    <header className={styles.header}>
      <h1>Quran Common Components </h1>
      <p>Common components to be used across Quran.com, Quranicaudio.com and Salah.com</p>
    </header>
    <main>
      <section>
        <h2>Buttons: </h2>
        <Button>Shuffle Play</Button>
        <Button disabled>Disabled</Button>
        <div>
          <Button color="inverted">Inverted</Button>
          <Button color="grey">Grey Border</Button>
        </div>
      </section>
    </main>
  </div>);

export default Home;
