import React from 'react';

import { Player } from "./player/Player";
import { Grid } from "./grid/Grid";
import "./Game.css";

export const Game = (players) => {
  return (
    <section className="game__section">

      <Grid />

      <Player id="img_player2">Player 2</Player>
    </section>
  )
}
