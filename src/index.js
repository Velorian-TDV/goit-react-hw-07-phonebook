import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './Redux/store';
import App from './Components/App';
import './Style/style.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename='/goit-react-hw-06-phonebook'>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);