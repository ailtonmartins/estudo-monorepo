import React from 'react';
import { Header } from '@estudo-monorepo/header';
import { Menu } from '@estudo-monorepo/menu';
import { Table } from '@estudo-monorepo/table';
import { isValidEmail, formatCurrency } from '@estudo-monorepo/utils';

const App = () => {
  const data = [{ name: 'Item 1', price: 20 }, { name: 'Item 2', price: 50 }];

  return (
    <div>
      <Header text="Bem-vindo ao App 1" />
      <Menu />
      <Table data={data} />
      <p>Email válido? {isValidEmail("teste@exemplo.com").toString()}</p>
      <p>Formato moeda: {formatCurrency(2000)}</p>
    </div>
  );
};

export default App;
