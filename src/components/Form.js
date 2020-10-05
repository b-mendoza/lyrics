import React, { useContext, useState } from 'react';
import { addSearchData } from '../actions/actions';

import { LyricsContext } from '../context/LyricsContext';
import { formatText } from '../helpers/formatText';
import { isValid } from '../helpers/isValid';
import { useForm } from '../hooks/useForm';

const INITIAL_FORM_VALUES = {
    artistName: '',
    songName: '',
};

const Form = () => {
    const [error, setError] = useState(false);

    const [formValues, handleChange] = useForm(INITIAL_FORM_VALUES);
    const { artistName, songName } = formValues;

    const { dispatch } = useContext(LyricsContext);

    const handleSubmit = event => {
        event.preventDefault();

        if (!isValid(artistName, songName)) {
            setError(true);

            return;
        } else setError(false);

        const formatedArtistName = formatText(artistName);
        const formatedSongName = formatText(songName);

        dispatch(addSearchData(formatedArtistName, formatedSongName));
    };

    return (
        <div className="bg-info">
            <div className="container">
                {error && (
                    <p className="alert alert-danger text-center p-2">
                        All the fields are mandatory
                    </p>
                )}

                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend className="text-center">
                                Lyrics Search
                            </legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artist Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="artistName"
                                            value={artistName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Song Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="songName"
                                            value={songName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                className="btn btn-primary float-right"
                                type="submit"
                            >
                                Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;
