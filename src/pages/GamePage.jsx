import React, { useState } from 'react'
import { Game } from '../components/game/Game';
import { PlayerAnnouncer } from '../components/player-announcer/PlayerAnnouncer';
import { Buttons } from '../components/buttons/Buttons.jsx';

export const GamePage = () => {

  const playersArr = new Array(2).fill(1).map((player, index) => ({
    name: index === 0 ? "Player 1" : "Player 2",
    img: "./images/init.png",
    score: 0
  }));

  const [players, setPlayers] = useState(playersArr);

  const [matrix, setMatrix] = useState(["", "", "", "", "", "", "", "", ""]);

  const [turn, setTurn] = useState("");

  return (
    <>
        <Game 
          matrix={ matrix } changeMatrix={ setMatrix } 
          players={ players } changePlayers={ setPlayers }
          turn={ turn } changeTurn={ setTurn } />

        <PlayerAnnouncer turn={ turn } />

        <Buttons 
          players={ players } setPlayers={ setPlayers } 
          turn={ turn } setTurn={ setTurn }
          changeGrid={ setMatrix } />
    </>
  )
}
