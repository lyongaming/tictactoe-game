import React from 'react';
import { Button } from './Button';

import "./Buttons.css";

export const Buttons = () => {

  const buttons = [
  {
    text: "Draw game",
    id: "ranGame",
    click_function: () => {}
  },
  {
    text: "Next game",
    id: "nextButton",
    click_function: () => {}
  },
  {
    text: "Restart",
    id: "cleanButton",
    click_function: () => {}
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
          > { button.text }
          </Button>
        ))
      }
    </footer>
  )
}
