import React, { useState } from "react";
import { Game } from "../components/game/Game";
import { PlayerAnnouncer } from "../components/player-announcer/PlayerAnnouncer";
import { Buttons } from "../components/buttons/Buttons.jsx";

import { PlayerProvider } from "../context/PlayerContext";
import { TurnProvider } from "../context/TurnContext";

export const GamePage = () => {
  const [matrix, setMatrix] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <>
      <PlayerProvider>
        <TurnProvider>
          <Game
            matrix={matrix}
            changeMatrix={setMatrix}
          />

          <PlayerAnnouncer />

          <Buttons changeGrid={setMatrix} />
          
        </TurnProvider>
      </PlayerProvider>
    </>
  );
};
