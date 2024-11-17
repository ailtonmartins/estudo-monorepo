import React from 'react';
import './menu.module.css';


export const Menu: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="http://localhost:4200" rel="noopener noreferrer">
            App 1
          </a>
        </li>
        <li>
          <a href="http://localhost:4201" rel="noopener noreferrer">
            App 2
          </a>
        </li>
        <li>
          <a href="http://localhost:4202" rel="noopener noreferrer">
            App 3
          </a>
        </li>
      </ul>
    </nav>
  );
};
