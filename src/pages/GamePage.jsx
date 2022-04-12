import React from 'react'
import { Game } from '../components/game/Game';
import { PlayerAnnouncer } from '../components/player-announcer/PlayerAnnouncer';
import { Buttons } from '../components/buttons/Buttons.jsx';

export const GamePage = () => {
  return (
    <>
        <Game />

        <PlayerAnnouncer />

        <Buttons />
    </>
  )
}
