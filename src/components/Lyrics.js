import React, { useContext } from 'react';

import { LyricsContext } from '../context/LyricsContext';
import { useLyrics } from '../hooks/useLyrics';

const Lyrics = () => {
    const { lyricsData } = useContext(LyricsContext);
    const { artistName, songName } = lyricsData;

    const lyricsText = useLyrics(artistName, songName);

    return (
        <>
            <h3>{songName}</h3>
            <p className="letra">{lyricsText}</p>
        </>
    );
};

export default Lyrics;
