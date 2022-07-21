import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { App } from '@components';
import { rootReducer } from '@store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>
);
