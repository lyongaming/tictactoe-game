import React from "react";

import { Player } from "./player/Player";
import { Grid } from "./grid/Grid";
import "./Game.css";

export const Game = ({ players, turn }) => {
  const playersArr = players.map((player) => (
    <Player key={player.name} img={player.img} score={player.score} turn={ turn } >
      {player.name}
    </Player>
  ));

  return (
    <section className="game__section">

      { playersArr[0] }

      <Grid />

      { playersArr[1] }

    </section>
  );
};
