import React from 'react'

export const Player = ({ children: name }) => {
  return (
    <aside className="game__player">
      <h2 className="game__player-h2">{ name }</h2>
      <picture className="game__player-picture">
        <img className="emoji" src="./images/init.png" />
      </picture>
      <div className="game__player-score">
        <p className="game__player-p">Score:</p>
        <p className="game__player-number-score">0</p>
      </div>
    </aside>
  )
}
