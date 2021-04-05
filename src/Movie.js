import React from 'react';
import PropTypes from 'prop-types';

function Movie({ id, year, title, summary, poster }) {
    return (
        <div>
            <div>
                {title}
                <span>{year}</span>
            </div>
            <img src={poster}></img>
            <p>{summary}</p>

        </div>

    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,

}

export default Movie;