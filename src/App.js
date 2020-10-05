import React, { useContext } from 'react';

import { LyricsContext } from './context/LyricsContext';
import Form from './components/Form';
import Lyrics from './components/Lyrics';
import ArtistInfo from './components/ArtistInfo';

const App = () => {
    const { lyricsData } = useContext(LyricsContext);

    return (
        <>
            <Form />

            {Object.keys(lyricsData).length !== 0 && (
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <Lyrics />
                        </div>
                        <div className="col-md-6">
                            <ArtistInfo />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;
