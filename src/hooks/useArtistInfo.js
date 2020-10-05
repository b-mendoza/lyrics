import { useEffect, useState } from 'react';
import { fetchArtistInfo } from '../helpers/fetchArtistInfo';

export const useArtistInfo = artistName => {
    const [artistInfo, setArtistInfo] = useState({});

    useEffect(() => {
        fetchArtistInfo(artistName).then(setArtistInfo);
    }, [artistName]);

    return artistInfo;
};
