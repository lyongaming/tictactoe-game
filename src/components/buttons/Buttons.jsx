import React from 'react';
import { Button } from './Button';

import "./Buttons.css";

import toggleModal from "../../helpers/toggleModal";

export const Buttons = () => {

  const showModal = () => toggleModal("1", "visible");

  const buttons = [
  {
    text: "Draw game",
    id: "ranGame",
    click_function: showModal
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
