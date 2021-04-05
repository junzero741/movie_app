import React from 'react';
import PropTypes from 'prop-types';
import './Movie.scss';

function Movie({ year, title, summary, poster, rating, genres }) {
    return (
        <div className="movie">
            <img className="movie__image" src={poster} alt={title} title={title}></img>
            <div className="movie__data">
                <div className="movie__data__title">{title}
                    <div className="movie__data__genre"> {genres.map(genre => genre+' ')}</div>
                </div>
                <div className="movie__data__rating">{rating} / 10</div>
                <p className="movie__data__summary">{summary}</p>
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
    genres: PropTypes.array.isRequired

}

export default Movie;