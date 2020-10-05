import { types } from '../types/types';

export const addSearchData = (artistName, songName) => ({
    type: types.LYRICS_ADD_SEARCH_DATA,
    payload: { artistName, songName },
});
