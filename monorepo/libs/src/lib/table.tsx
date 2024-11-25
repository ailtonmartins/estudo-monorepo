import React from 'react';
import './table.module.css';

export interface TableProps {
  data: Array<{ [key: string]: string | number }>;
}

export const Table: React.FC<TableProps> = ({ data }) => (
  <table>
    <thead>
      <tr>{Object.keys(data[0]).map(key => <th key={key}>{key}</th>)}</tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          {Object.values(row).map((value, i) => <td key={i}>{value}</td>)}
        </tr>
      ))}
    </tbody>
  </table>
);
