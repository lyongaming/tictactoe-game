import React from 'react';

import "./Player.css";

export const Player = ({ children: name, id }) => {
  return (
    <aside className="game__player">
      <h2 className="game__player-h2" id="player1_title">{ name }</h2>
      <picture className="game__player-picture">
        <img className="emoji" src="./images/init.png" alt="Initial" id={ id } />
      </picture>
      <div className="game__player-score">
        <p className="game__player-p">Score:</p>
        <p className="game__player-number-score">0</p>
      </div>
    </aside>
  )
}