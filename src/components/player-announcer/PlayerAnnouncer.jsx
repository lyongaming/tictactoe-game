import React from 'react'

import "./PlayerAnnouncer.css";
import "../buttons/Buttons.css";

export const PlayerAnnouncer = () => {
  return (
    <div className="modal-container">
      <div className="modal modal-close">
        <img src="./images/coin.gif" alt="Start" />
        <div className="modal-text">
          <h1 id="playerInit">Start Player 1</h1>
        </div>
        <button className="button_start start_button" type="button">Begin</button>
      </div>
    </div>
  )
}
