import React from 'react';
import { Header } from '@estudo-monorepo/header';
import { Menu } from '@estudo-monorepo/menu';
import { Table } from '@estudo-monorepo/table';
import { formatCurrency } from '@estudo-monorepo/utils';

const App = () => {
  const data = [{ name: 'Item 1', price: 20 }, { name: 'Item 1', price: 20 },{ name: 'Item 1', price: 20 },{ name: 'Item 2', price: 50 }];

  return (
    <div>
      <Header text="Bem-vindo ao App 2" />
      <Menu />
      <Table data={data} />
      <p>Formato moeda: {formatCurrency(5500)}</p>
    </div>
  );
};

export default App;
