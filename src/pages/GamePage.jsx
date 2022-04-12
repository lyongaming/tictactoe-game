import React, { useState } from 'react'
import { Game } from '../components/game/Game';
import { PlayerAnnouncer } from '../components/player-announcer/PlayerAnnouncer';
import { Buttons } from '../components/buttons/Buttons.jsx';

export const GamePage = () => {

  const playersArr = new Array(2).fill(1).map(player => ({
    img: "./images/init.png",
    score: 0
  }));

  // const [players, setPlayers] = useState(playersArr);

  return (
    <>
        <Game />

        <PlayerAnnouncer />

        <Buttons />
    </>
  )
}
