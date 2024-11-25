import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './app/app';

const ParcelComponent = () => {
  console.log('Parcel Component Rendered');
  return <div>Hello from Vite + single-spa!</div>;
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    console.error('Error loading micro frontend', err);
    return <div>Error loading micro frontend</div>;
  },
});

console.log('Exporting lifecycles:', lifecycles);

export const { bootstrap, mount, unmount } = lifecycles;
