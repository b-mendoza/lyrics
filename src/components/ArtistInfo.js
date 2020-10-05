import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookSquare,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import { LyricsContext } from '../context/LyricsContext';
import { useArtistInfo } from '../hooks/useArtistInfo';

const ArtistInfo = () => {
    const { lyricsData } = useContext(LyricsContext);
    const { artistName } = lyricsData;

    const artistData = useArtistInfo(artistName);

    if (Object.keys(artistData).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyEN } = artistData;

    return (
        <div className="card border-0">
            <div className="card-header bg-primary font-weight-bold">
                Artist Info
            </div>

            <div className="card-body">
                <img src={strArtistThumb} alt="Artist Profile" loading="lazy" />

                <h3 className="card-text">Bio</h3>
                <p className="card-text">{strBiographyEN}</p>

                <strong className="card-text">Genre</strong>
                <p className="card-text">{strGenre}</p>

                <p className="card-text d-flex justify-content-start">
                    {artistData?.strFacebook && (
                        <a
                            className="mr-4"
                            href={`https://${artistData?.strFacebook}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                icon={faFacebookSquare}
                                size="3x"
                            />
                        </a>
                    )}

                    {artistData?.strTwitter && (
                        <a
                            href={`https://${artistData?.strTwitter}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon icon={faTwitter} size="3x" />
                        </a>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ArtistInfo;
