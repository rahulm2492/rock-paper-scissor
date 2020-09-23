
  import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Game from '../components/Game';
import gameData from '../src/gameData';

const App = (props) => {
  console.log('check', props);
  return (
  <>
    Let's Play
    <Game data={gameData}/>
    <AmplifySignOut />
    
  </>
);
  }

  
  

export default withAuthenticator(App);
