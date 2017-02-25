import React from 'react';
import Button from '../components/Button';
import styles from './style.scss';
const Home = () => {
	return (
		<div className={styles.app}>
			<h1>Quran Common Components </h1>
			<hr />
			<section>
				<Button>Button Example</Button>
			</section>
		</div>
	);
};

export default Home;