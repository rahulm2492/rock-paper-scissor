export const getComputerWeapon = (maxNumber) => () =>
  Math.floor(Math.random() * Math.floor(maxNumber));

  export const getResult = (weapons) => (weapon1, weapon2) => {
      const weaponName1 = weapons[weapon1]; 
      const weaponName2 = weapons[weapon2]; 
     if(weapon1 == weapon2){
         return 'Draw';
     }
     else if( (weaponName1.beats).indexOf(weaponName2.label) !== -1){
        return 1;
    } else {
        return 0;
    }
  }
//Main Logic to handle
