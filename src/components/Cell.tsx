import React from "react";
import "./Cell.css";

interface ICellProps {
  value: string;
  handleClick: () => void;
}
export const Cell: React.FC<ICellProps> = ({ value, handleClick }) => {
  return (
    <button
      className="Cell-square"
      style={{ background: value }}
      onClick={handleClick}
    />
  );
};
