import PlayerContext from "../context/PlayerContext";

import { useContext, useEffect } from "react";
import { useTurn } from "./useTurn";

export const usePlayers = () => {

    const { players, setPlayers } = useContext(PlayerContext);

    const { turn } = useTurn();
    
    let playerClasses = ["game__player"];
    
    const setClasses = () => {
      if (turn) {
        if (turn === "Player 1") {
          playerClasses.filter((clas) => clas === "not_turn");
          playerClasses.push("turn");
        } else {
          playerClasses.filter((clas) => clas === "turn");
          playerClasses.push("not_turn");
        }
      }
    
      return playerClasses;
    };

    useEffect(() => setClasses, [turn]);

    return { players, setPlayers, playerClasses }
}

