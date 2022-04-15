import React from 'react'

import "./PlayerAnnouncer.css";
import "../buttons/Buttons.css";

import { Button } from '../buttons/Button';

import toggleModal from "../../helpers/toggleModal"
import { useTurn } from '../../hooks/useTurn';

export const PlayerAnnouncer = () => {

  const { turn } = useTurn();

  const beginGame = () => toggleModal("0", "hidden");

  return (
    <div className="modal-container">
      <div className="modal modal-close">
        <img src="./images/coin.gif" alt="Start" />
        <div className="modal-text">
          <h1 id="playerInit">{`Start ${ turn }`}</h1>
        </div>
        <Button id="start_button" click={ beginGame }>Begin</Button>
      </div>
    </div>
  )
}