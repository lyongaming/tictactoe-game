import React from "react";

import { GridSection } from "./GridSection";

export const GridRow = ({ players, changePlayers, grid, row, rowIndex, changeRow, turn, changeTurn }) => {
  return (
    <tr>
      {row.map((section, index) => (
        <GridSection
          key={index}
          players={ players }
          changePlayers={ changePlayers }
          grid={grid}
          rowIndex={rowIndex}
          sectionIndex={index}
          changeSection={changeRow}
          turn={turn}
          changeTurn={ changeTurn }
        />
      ))}
    </tr>
  );
};
