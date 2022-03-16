import React from 'react';

import { Player } from "./player/Player";
import { Grid } from "./grid/Grid";
import "./Game.css";

export const Game = () => {
  return (
    <section className="game__section">
      <Player>Player 1</Player>

      <Grid />

      <Player>Player 2</Player>
    </section>
  )
}
