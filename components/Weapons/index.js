import React, { PropTypes } from "react";
import styles from "./Weapons.module.scss";

const Weapons = ({ weapon, index }) => (
  <div
    className={styles.weaponContainer}
    index={index}
  >
    <div index={index}>
      <img src={`./Icons/${weapon.icon}`} alt={weapon.label} index={index}/>
    </div>
    <span index={index}>{weapon.label}</span>
  </div>
);

// Weapons.propTypes = {
//   label: PropTypes.string.isRequired,
//   onSelect: PropTypes.func.isRequired,
// };

export default Weapons;
