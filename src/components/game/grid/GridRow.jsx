import React from "react";

import { GridSection } from "./GridSection";

export const GridRow = ({ grid, row, rowIndex, changeRow, turn }) => {
  return (
    <tr>
      {row.map((section, index) => (
        <GridSection
          key={index}
          grid={grid}
          rowIndex={rowIndex}
          sectionIndex={index}
          changeSection={changeRow}
          turn={turn}
        />
      ))}
    </tr>
  );
};
