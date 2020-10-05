import { useEffect, useState } from 'react';
import { fetchLyrics } from '../helpers/fetchLyrics';

export const useLyrics = (artistName, songName) => {
    const [lyrics, setLyrics] = useState('');

    useEffect(() => {
        fetchLyrics(artistName, songName).then(setLyrics);
    }, [artistName, songName]);

    return lyrics;
};
