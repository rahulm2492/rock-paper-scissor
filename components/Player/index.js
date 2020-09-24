import React from 'react';
import styles from './Player.module.scss';

import Weapon from '../Weapons';

const Player = ({ label, weapon, loading, score }) => (
	<div className={styles.Player}>
		<div>
			<span className={styles.label}>{label}</span>
			<span className={styles.score}>Score: {score} PT{score > 1 && 'S'}</span>
		</div>
		{<div className={styles.image}><Weapon
			weapon={weapon}
			loading={!weapon}
		/></div>}
		
	</div>
);

export default Player;