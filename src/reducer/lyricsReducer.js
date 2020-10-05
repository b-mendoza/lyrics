import { types } from '../types/types';

export const lyricsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.LYRICS_ADD_SEARCH_DATA:
            return {
                ...state,
                artistName: action.payload.artistName,
                songName: action.payload.songName,
            };

        default:
            return state;
    }
};
