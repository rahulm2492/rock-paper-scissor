
  import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Game from '../components/Game';
import gameData from '../utils/gameData.js';

const App = (props) => {
  return (
  <>
    <Game data={gameData}/>
    <AmplifySignOut />
    
  </>
);
  }

  
  

export default withAuthenticator(App);
