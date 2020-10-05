import React, { createContext, useReducer } from 'react';
import { lyricsReducer } from '../reducer/lyricsReducer';

export const LyricsContext = createContext();

const init = () => ({});

export const LyricsContextProvider = ({ children }) => {
    const [lyricsData, dispatch] = useReducer(lyricsReducer, {}, init);

    return (
        <LyricsContext.Provider value={{ lyricsData, dispatch }}>
            {children}
        </LyricsContext.Provider>
    );
};
