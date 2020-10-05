export const fetchArtistInfo = async artistName => {
    const URL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${encodeURI(
        artistName.toLowerCase().trim()
    )}`;

    const response = await fetch(URL);
    const body = await response.json();

    return body.artists[0];
};
