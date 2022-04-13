import React from "react";

import { GridRow } from "./GridRow";
import "./Grid.css";

export const Grid = ({ players, changePlayers, turn, changeTurn, matrix, changeMatrix }) => {
  return (
    <main className="game__grid">
      <table className="game__grid-table">
        <tbody>
          {matrix.map((row, index) => (
            <GridRow
              key={index}
              players={ players }
              changePlayers={ changePlayers }
              grid={matrix}
              rowIndex={index}
              row={row}
              changeRow={changeMatrix}
              turn={turn}
              changeTurn={ changeTurn }
            />
          ))}
        </tbody>
      </table>
    </main>
  );
};
