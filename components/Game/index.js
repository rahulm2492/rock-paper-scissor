import React, {  useState, useEffect } from 'react';
import styles from './Games.module.scss';
import Modes from '../Modes';
import {getComputerWeapon, getResult} from '../../utils/gameLogic';
import Player from '../Player';
 import WeaponList from '../WeaponsList';
// import Result from './components/Result';

const weapons = {
	rock: {
		wins: ['scissors'],
	},
	paper: {
		wins: ['rock'],
	},
	scissors: {
		wins: ['paper'],
	},
};

const modes = {
	vs: {
		label: 'PLAYER VS COMPUTER',
		player1Label: 'COMPUTER',
		player2Label: 'PLAYER',
	},
	simulate: {
		label: 'COMPUTER VS COMPUTER',
		player1Label: 'COMPUTER 1',
		player2Label: 'COMPUTER 2',
	}
};

const modeKeys = Object.keys(modes);
const weaponKeys = Object.keys(weapons);

export const getRandomWeapon = () => {
	return weaponKeys[ weaponKeys.length * Math.random() << 0];
};

export const getWinner = (weapon1, weapon2) => {
	if (weapon1 === weapon2) return 0;
	return weapons[weapon1].wins.some(wins => wins === weapon2) ? 1 : 2;
}

const initialState = {
	mode: modeKeys[0],
	player1: {
		loading: false,
		weapon: null,
		score: 0,
	},
	player2: {
		loading: false,
		weapon: null,
		score: 0,
	},
	winner: null,
};

const Game = (props) =>  {

	const {weapons, modes} = props.data;
	const getComputerMove = getComputerWeapon(weapons.length);
	const getGameResult = getResult(weapons);
	
	const [currentMode, toggleMode] = useState(0);
	const [player1Weapon, setPlayer1Weapon] = useState(undefined);
	const [player2Weapon, setPlayer2Weapon] = useState(undefined);
	const [score1, setScore1] = useState(0);
	const [score2, setScore2] = useState(0);

	const {player1Label, player2Label} =  modes[currentMode];
	
	 useEffect(()=> {
		const result = getGameResult(player1Weapon, player2Weapon);
		result == 1 && setScore1(score1+1);
		result == 0 && setScore2(score2+1);
	},[player1Weapon, player2Weapon])

	const weaponSelected = (yourWeapon) => {
		setPlayer1Weapon(yourWeapon);
		const computerWeapon = getComputerMove();
		setPlayer2Weapon(computerWeapon);
	}
	// state = initialState

	// /**
	//  * Play a round
	//  * @param weapon When passed, will be used as Player 2 weapon. Otherwise, will generate a random weapon
	//  */
	// play(weapon) {
	// 	const weapon1 = getRandomWeapon();
	// 	const weapon2 = weapon || getRandomWeapon();
	// 	const simulateMode = this.state.mode === modeKeys[1];

	// 	this.setState({
	// 		player1: {
	// 			...this.state.player1,
	// 			weapon: weapon1,
	// 			loading: true,
	// 		},
	// 		player2: {
	// 			...this.state.player2,
	// 			weapon: weapon2,
	// 			...((simulateMode) ? { loading: true } : {}),
	// 		},
	// 	});

	// 	// Update result after some delay
	// 	setTimeout(() => {
	// 		this.setResult();
	// 	}, 500 + Math.random() * 500)
	// }

	// /**
	//  * Determine the winner and set the result in the state
	//  */
	// setResult() {
	// 	const winner = getWinner(this.state.player1.weapon, this.state.player2.weapon);

	// 	this.setState({
	// 		player1: {
	// 			...this.state.player1,
	// 			...((winner === 1) ? { score: this.state.player1.score + 1 } : {}),
	// 			loading: false,
	// 		},
	// 		player2: {
	// 			...this.state.player2,
	// 			...((winner === 2) ? { score: this.state.player2.score + 1 } : {}),
	// 			loading: false,
	// 		},
	// 		winner,
	// 	});
	// }

	// /**
	//  * Reset the weapons and winner states
	//  */
	// restart() {
	// 	this.setState({
	// 		player1: {
	// 			...this.state.player1,
	// 			weapon: initialState.player1.weapon,
	// 		},
	// 		player2: {
	// 			...this.state.player2,
	// 			weapon: initialState.player2.weapon,
	// 		},
	// 		winner: initialState.winner,
	// 	});
	// }

	// /**
	//  * Reset the entire state to initial values
	//  */
	// reset() {
	// 	this.setState(initialState);
	// }

	// /**
	//  * Toggle mode between player vs computer & computer vs computer
	//  */
	// toggleMode() {
	// 	const mode = this.state.mode;
	// 	this.reset();
	// 	this.setState({ mode: mode === modeKeys[0] ? modeKeys[1] : modeKeys[0] });
	// }

	
		// const { player1Label, player2Label } = modes[this.state.mode];
		// const loading = (this.state.player1.loading || this.state.player2.loading);
		return (
			<div className={styles.game}>
				<h1>
					ROCK, PAPER, SCISSORS
				</h1>
				<div className="modes">
					<Modes
						onToggleMode={() => toggleMode(!currentMode*1)}
						currentMode={modes[currentMode]}
					/>
				</div>

				<div className="challenge">
					<Player label={player1Label} weapon={weapons[player1Weapon]} score={score1}/>
					<Player label={player2Label} weapon={weapons[player2Weapon]} score={score2}/>
				</div>

				<div className="footer">
					{/* {this.state.winner === null && !loading && this.state.mode === modeKeys[0] && (
						// <WeaponList
						// 	weapons={weaponKeys}
						// 	onClickWeapon={weapon => this.play(weapon)}
						// />
					)} */}

					{/* {(this.state.winner !== null || loading || this.state.mode === modeKeys[1]) && (
						// <Result
						// 	player1Label={player1Label}
						// 	player2Label={player2Label}
						// 	winner={this.state.winner}
						// 	loading={loading}
						// 	onClickPlay={() => this.state.mode === modeKeys[1] ?
						// 		this.play() : this.restart()
						// 	}
						// />
					)} */}
					<WeaponList weapons = {weapons} onSelectWeapon={(weapon) => weaponSelected(weapon)}/>
				</div>
			</div>
		);
	
}

export default Game;