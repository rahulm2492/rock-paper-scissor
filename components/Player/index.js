import React from 'react';
import styles from './Player.module.scss';

import Weapon from '../Weapons';

const Player = ({ label, weapon, loading, score }) => (
	<div className={styles.Player}>
		<div>
			<span className="label">{label}</span>
		</div>
		{weapon && <Weapon
			weapon={weapon}
			loading={loading}
		/>}
		<div>
			<span className="score">{score} PT{score > 1 && 'S'}</span>
		</div>
	</div>
);

export default Player;