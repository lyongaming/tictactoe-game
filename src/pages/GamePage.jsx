import React, { useState } from 'react'
import { Game } from '../components/game/Game';
import { PlayerAnnouncer } from '../components/player-announcer/PlayerAnnouncer';
import { Buttons } from '../components/buttons/Buttons.jsx';
import { PlayerProvider } from '../context/PlayerContext';

export const GamePage = () => {

  const [matrix, setMatrix] = useState(["", "", "", "", "", "", "", "", ""]);

  const [turn, setTurn] = useState("");

  return (
    <>
      <PlayerProvider>
        <Game 
          matrix={ matrix } changeMatrix={ setMatrix } 
          turn={ turn } changeTurn={ setTurn } />

        <PlayerAnnouncer turn={ turn } />

        <Buttons 
          turn={ turn } setTurn={ setTurn }
          changeGrid={ setMatrix } />
      </PlayerProvider>
    </>
  )
}
