import React from 'react';

import { GridRow } from './GridRow';
import "./Grid.css";

export const Grid = ({ turn, matrix, changeMatrix }) => {

  return (
    <main className="game__grid">
      <table className="game__grid-table">
        {
          matrix.map((row, index) => (
            <GridRow 
              key={ index } 
              grid={ matrix }
              rowIndex={ index } 
              row={ row } 
              changeRow={ changeMatrix } 
              turn={ turn } />
          ))
        }
      </table>
    </main>
  )
}
