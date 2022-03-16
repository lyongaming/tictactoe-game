import React from 'react';

import { GridRow } from './GridRow';
import "./Grid.css";

export const Grid = () => {
  return (
    <main className="game__grid">
      <table className="game__grid-table">
        <GridRow />
        <GridRow />
        <GridRow />
      </table>
    </main>
  )
}
