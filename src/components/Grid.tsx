import React, { useState } from "react";
import { Cell } from "./Cell";

export const Grid: React.FC = () => {
  const [grid, setGrid] = useState(() =>
    Array.from(Array(10), () => Array(10).fill("white"))
  );
  const handleClick = (i: number, j: number) => {
    let newGrid = grid.slice();
    newGrid[i][j] = newGrid[i][j] === "white" ? "black" : "white";
    setGrid(newGrid);
  };
  const gridFragment = grid.map((rows, i) => {
    const rowFragment = rows.map((_, j) => (
      <span key={`${i}-${j}`}>
        <Cell value={grid[i][j]} handleClick={() => handleClick(i, j)} />
      </span>
    ));
    rowFragment.push(<br />);
    return rowFragment;
  });
  return <React.Fragment>{gridFragment}</React.Fragment>;
};
