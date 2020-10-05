import React from 'react';
import ReactDOM from 'react-dom';

import { LyricsContextProvider } from './context/LyricsContext';
import App from './App';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <LyricsContextProvider>
            <App />
        </LyricsContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
