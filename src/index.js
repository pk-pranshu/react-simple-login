import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import task from './reducers';
import App from './containers/app';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(task);

render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
    document.getElementById('app')
);
