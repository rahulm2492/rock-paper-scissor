import React, { PropTypes } from 'react';
import styles from './Modes.module.scss';

const Modes = ({ currentMode, onToggleMode }) => (
	<div className={styles.modes}>
		<span className="label">{currentMode.label}</span><br />
		<button
			onClick={onToggleMode}
		>
			CHANGE MODE
		</button>
	</div>
);


export default Modes;