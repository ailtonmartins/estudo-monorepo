import React from 'react';
import './header.module.css';

interface HeaderProps {
  text: string;
}

export const Header: React.FC<HeaderProps> = ({ text }) => {
  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
};
