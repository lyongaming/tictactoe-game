import React from "react";
import { Button } from "./Button";

import "./Buttons.css";

import toggleModal from "../../helpers/toggleModal";

export const Buttons = ({ players, setPlayers, turn, setTurn, changeGrid }) => {
  const drawGame = () => {
    const randTurn = Math.floor(Math.random() * 2) + 1;
    turn = randTurn === 1 ? "Player 1" : "Player 2";
    players = players.map((player) => {
      player =
        player.name === turn
          ? {
              ...player,
              img: "./images/play.png",
            }
          : {
              ...player,
              img: "./images/wait.png",
            };
      return player;
    });
    toggleModal("1", "visible");

    setTurn(turn);
    setPlayers(players);
  };

  const restartGame = () => {
    players = players.map(player => ({
      name: player.name,
      img: "./images/init.png",
      score: 0
    }));

    setTurn("")
    setPlayers(players);
    changeGrid([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  };

  const buttons = [
    {
      text: "Draw game",
      id: "ranGame",
      click_function: drawGame,
      active: turn ? false : true,
    },
    {
      text: "Next game",
      id: "nextButton",
      click_function: () => {},
      active: false,
    },
    {
      text: "Restart",
      id: "cleanButton",
      click_function: restartGame,
      active: turn ? true : false,
    },
  ];

  return (
    <footer className="buttons">
      {buttons.map((button) => (
        <Button
          key={button.id}
          id={button.id}
          click={button.click_function}
          active={button.active}
        >
          {" "}
          {button.text}
        </Button>
      ))}
    </footer>
  );
};
