import React from "react";

import "./Grid.css";
import { GridSection } from "./GridSection";

export const Grid = ({ turn, changeTurn, matrix, changeMatrix }) => {
  return (
    <main className="game__grid">
      <table className="game__grid-table">
        <tbody>
          {
            Array(3).fill("").map((row, rowIndex) => {

              if (rowIndex === 1) rowIndex+=2;
              if (rowIndex === 2) rowIndex+=4;

              return (
                <tr key={ rowIndex }>
                  {
                    Array(3).fill("").map((section, index) => (
                      <GridSection 
                        key={ index + rowIndex }
                        index={ index + rowIndex }
                        turn={ turn }
                        changeTurn={ changeTurn }
                        grid={ matrix }
                        changeGrid={ changeMatrix } />
                    ))
                  }
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </main>
  );
};
