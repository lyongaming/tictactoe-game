import React from 'react';
import { Button } from './Button';

import "./Buttons.css";

import toggleModal from "../../helpers/toggleModal";

export const Buttons = () => {

  const drawGame = () => {
    // Determina the turn
    // Set style changes accordingly
    // Show modal
    const img_player1 = document.getElementById("img_player1");
    img_player1.src = "./images/play.png";
    img_player1.style.width = "120%";

    const img_player2 = document.getElementById("img_player2");
    img_player2.src = "./images/wait.png";
    img_player2.style.width = "80%";

    document.getElementById("player1_title").style.fontSize = "30px";

    toggleModal("1", "visible");
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
