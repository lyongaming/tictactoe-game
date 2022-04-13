import React from 'react';

export const GridSection = ({ turn, grid, rowIndex, sectionIndex, changeSection }) => {

    let text = "";
    const classNames = ["button-select"];

    if (turn) classNames.push("button-sel");

    const drawFigure = () => {
        const newGrid = [...grid];
        if (turn === "Player 1") {
            newGrid[rowIndex][sectionIndex] = "X"
        } else if(turn === "Player 2") {
            newGrid[rowIndex][sectionIndex] = "O"
        }
        changeSection(newGrid);
    }


    return (
        <td>
            <button onClick={ drawFigure } 
                    className={ classNames.join(" ") } 
                    type="button">
                        <p>{ text }</p>
            </button>
        </td>
    )
}
