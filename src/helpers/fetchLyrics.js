export const fetchLyrics = async (artistName, songName) => {
    const URL = `https://api.lyrics.ovh/v1/${encodeURI(
        artistName.toLowerCase().trim()
    )}/${encodeURI(songName.toLowerCase().trim())}`;

    const response = await fetch(URL);
    const body = await response.json();

    return body.lyrics;
};
