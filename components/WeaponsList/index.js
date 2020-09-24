import React, { PropTypes } from "react";
import styles from "./WeaponsList.module.scss";
import Weapons from "../Weapons";

const WeaponsList = ({ weapons, onSelectWeapon, mode }) => (
  <>
    {!mode && <h2 className={styles.h2}>Choose your Weapon:</h2>}

    <div
      className={styles.weapons}
      onClickCapture={(e) => {
        const currentIndex = e.target.getAttribute("index");
        !mode && currentIndex >= 0 ? onSelectWeapon(currentIndex) : null;
      }}
    >
      {weapons.map((weapon, index) => (
        <Weapons weapon={weapon} key={index} index={index} />
      ))}
    </div>
  </>
);

export default WeaponsList;
