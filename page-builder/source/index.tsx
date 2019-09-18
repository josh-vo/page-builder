import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return <span>Hello from kintone CLI</span>;
};

(() => {
  kintone.events.on('app.record.index.show', event => {
    'use strict';
    ReactDOM.render(<App />, kintone.app.getHeaderSpaceElement());

    return event;
  });
})();
