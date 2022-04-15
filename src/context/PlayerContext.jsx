import { createContext, useState } from "react";

const playersArr = new Array(2).fill(1).map((player, index) => ({
  name: index === 0 ? "Player 1" : "Player 2",
  img: "./images/init.png",
  score: 0,
}));

const PlayerContext = createContext([]);

export const PlayerProvider = ({ children }) => {
    
    const [players, setPlayers] = useState(playersArr);

    return <PlayerContext.Provider value={{ players, setPlayers }}>
        { children }
    </PlayerContext.Provider>
}

export default PlayerContext;