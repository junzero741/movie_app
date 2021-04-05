import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, summary, poster }) {
    return (
        <div className="movie">
            <div>
                <span className="title">{title}</span>
                <span className="year"> ({year})</span>
            </div>
            <div className="content">
            <img alt = {title} src={poster}></img>
            <p>{summary}</p>
            </div>

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