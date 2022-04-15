import React from 'react';

import { usePlayers } from "../../../hooks/usePlayers";

import "./Player.css";

export const Player = ({ children: name, img, score }) => {

  const { playerClasses } = usePlayers();

  return (
    <aside className={ playerClasses.join(" ") }>
      <h2 className="game__player-h2" >{ name }</h2>
      <picture className="game__player-picture">
        <img className="emoji" src={ img } alt="Initial" />
      </picture>
      <div className="game__player-score">
        <p className="game__player-p">Score:</p>
        <p className="game__player-number-score">{ score }</p>
      </div>
    </aside>
  )
}