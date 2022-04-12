import React from 'react';
import { Button } from './Button';

import "./Buttons.css";

import toggleModal from "../../helpers/toggleModal";

export const Buttons = ({ players, setPlayers, turn, setTurn }) => {

  const drawGame = () => {
    // Determina the turn
    const randTurn = Math.floor(Math.random() * 2) + 1;
    turn = randTurn === 1 ? "Player 1" : "Player 2";
    // Set style changes accordingly
    players = players.map(player => {
      player = player.name === turn ? {
        ...player,
        img: "./images/play.png"
      } : {
        ...player,
        img: "./images/wait.png"
      }
      return player;
    });
    toggleModal("1", "visible");
    
    setTurn(turn);
    setPlayers(players);
    
  }

  const buttons = [
  {
    text: "Draw game",
    id: "ranGame",
    click_function: drawGame
  },
  {
    text: "Next game",
    id: "nextButton",
    click_function: () => {},
    active: false
  },
  {
    text: "Restart",
    id: "cleanButton",
    click_function: () => {},
    active: false
  }
];

  return (
    <footer className="buttons">
      {
        buttons.map(button => (
          <Button 
            key={ button.id } 
            id={ button.id } 
            click={ button.click_function }
            active={ button.active } 
          > { button.text }
          </Button>
        ))
      }
    </footer>
  )
}
