import React, { useRef } from 'react';

export const GridSection = ({ index, players, changePlayers, turn, changeTurn, grid, changeGrid }) => {

    const buttonEl = useRef(null);

    const classNames = ["button-select"];

    if (turn) classNames.push("button-sel");

    const drawFigure = () => {
        const newGrid = [...grid];
        if (turn === "Player 1") {
            newGrid[index] = "X"
            console.log(index)
            buttonEl.current.classList.add("player1");
            changeTurn("Player 2");
        } else if(turn === "Player 2") {
            newGrid[index] = "O";
            buttonEl.current.classList.add("player2");
            changeTurn("Player 1");
        }
        players = players.map(player => {
            player = player.name === turn ? {
              ...player,
              img: "./images/wait.png"
            } : {
              ...player,
              img: "./images/play.png"
            }
            return player;
          });
        
        changePlayers(players);
        buttonEl.current.disabled = true;
        changeGrid(newGrid);
    }


    return (
        <td>
            <button onClick={ drawFigure } 
                    ref={ buttonEl }
                    className={ classNames.join(" ") } 
                    type="button">
                        { grid[index] }
            </button>
        </td>
    )
}
