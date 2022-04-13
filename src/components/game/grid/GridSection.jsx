import React, { useRef } from 'react';

export const GridSection = ({ turn, grid, rowIndex, sectionIndex, changeSection }) => {

    const buttonEl = useRef(null);

    const classNames = ["button-select"];

    if (turn) classNames.push("button-sel");

    const drawFigure = () => {
        const newGrid = [...grid];
        if (turn === "Player 1") {
            newGrid[rowIndex][sectionIndex] = "X"
            buttonEl.current.classList.add("player1");
        } else if(turn === "Player 2") {
            newGrid[rowIndex][sectionIndex] = "O";
            buttonEl.current.classList.add("player2");
        }
        buttonEl.current.disabled = true;
        changeSection(newGrid);
    }


    return (
        <td>
            <button onClick={ drawFigure } 
                    ref={ buttonEl }
                    className={ classNames.join(" ") } 
                    type="button">
                        { grid[rowIndex][sectionIndex] }
            </button>
        </td>
    )
}
