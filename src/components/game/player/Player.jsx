import React from 'react';

import "./Player.css";

export const Player = ({ children: name, img, score, turn }) => {

  let playerClasses = ["game__player"];

  if (turn) {
    if (name === turn) {
      playerClasses.filter(clas => clas === "not_turn");
      playerClasses.push("turn");
    } else {
      playerClasses.filter(clas => clas === "turn");
      playerClasses.push("not_turn");
    }
  }

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