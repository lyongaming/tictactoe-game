import React from 'react';

import { GridRow } from './GridRow';
import "./Grid.css";

export const Grid = ({ turn }) => {
  return (
    <main className="game__grid">
      <table className="game__grid-table">
        <GridRow turn={ turn } />
        <GridRow turn={ turn } />
        <GridRow turn={ turn } />
      </table>
    </main>
  )
}
