import React, { useContext } from "react";

import { Player } from "./player/Player";
import { Grid } from "./grid/Grid";
import "./Game.css";
import PlayerContext from "../../context/PlayerContext";
import { usePlayers } from "../../hooks/usePlayers";

export const Game = ({ turn, changeTurn, matrix, changeMatrix }) => {

  const { players } = usePlayers(PlayerContext);

  const playersArr = players.map((player) => (
    <Player key={player.name} img={player.img} score={player.score} >
      {player.name}
    </Player>
  ));

  return (
    <section className="game__section">

      { playersArr[0] }

      <Grid 
        matrix={ matrix } 
        changeMatrix={ changeMatrix } 
        turn={ turn } 
        changeTurn={ changeTurn } />

      { playersArr[1] }

    </section>
  );
};
