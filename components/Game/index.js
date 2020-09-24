import React, { useState, useEffect } from "react";
import styles from "./Games.module.scss";
import Modes from "../Modes";
import { getComputerWeapon, getResult } from "../../utils/gameLogic";
import Player from "../Player";
import WeaponList from "../WeaponsList";


const Game = (props) => {
  const { weapons, modes } = props.data;
  const getComputerMove = getComputerWeapon(weapons.length);
  const getGameResult = getResult(weapons);

  const [currentMode, toggleMode] = useState(0);
  const [gameRound, setGameCounter] = useState(0);

  const [player1Weapon, setPlayer1Weapon] = useState(undefined);
  const [player2Weapon, setPlayer2Weapon] = useState(undefined);
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const { player1Label, player2Label } = modes[currentMode];

  useEffect(() => {
    const result = getGameResult(player1Weapon, player2Weapon);
    result == 1 && setScore1(score1 + 1);
	result == 0 && setScore2(score2 + 1);
	setGameCounter(gameRound+1);
  }, [player1Weapon, player2Weapon]);

  useEffect(() => {
    setScore1(0);
    setScore2(0);
    setPlayer1Weapon(undefined);
	setPlayer2Weapon(undefined);
	setGameCounter(0);
  }, [currentMode]);

  const weaponSelected = (yourWeapon) => {
    setPlayer1Weapon(yourWeapon);
    const computerWeapon = getComputerMove();
    setPlayer2Weapon(computerWeapon);
  };

  return (
    <div className={styles.game}>
      <h1>ROCK, PAPER, SCISSORS</h1>
  <h5>Round: {gameRound}</h5>
      <div className={styles.modes}>
        <Modes
          onToggleMode={() => toggleMode(!currentMode * 1)}
          currentMode={modes[currentMode]}
        />
      </div>

      <div className={styles.challenge}>
        <Player
          label={player1Label}
          weapon={weapons[player1Weapon]}
          score={score1}
        />
        {!!currentMode && (
          <button
            title="Play"
            onClick={() => weaponSelected(getComputerMove())}
          >
            Play
          </button>
        )}
        <Player
          label={player2Label}
          weapon={weapons[player2Weapon]}
          score={score2}
        />
      </div>

      <div className="footer">
        <WeaponList
          weapons={weapons}
		  onSelectWeapon={(weapon) => weaponSelected(weapon)}
		  mode={currentMode}
        />
      </div>
    </div>
  );
};

export default Game;
