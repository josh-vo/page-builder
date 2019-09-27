import * as React from 'react';
import { render } from 'react-dom';

import { BuilderLayout } from './builder';

(() => {
  kintone.events.on('app.record.index.show', () => {
    render(<BuilderLayout />, kintone.app.getHeaderSpaceElement());
  });
})();
