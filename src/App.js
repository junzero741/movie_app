import React, { useState } from 'react';
import Movie from './Movie';
import PropTypes from 'prop-types';


class App extends React.Component {

  state = {
    isLoading: true,
    movies: []
  };


  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate() {
    console.log("components updated");
  }

  getMovies = () => {
    const url = "https://yts.mx/api/v2/list_movies.json"
    fetch(url)
      .then(result => result.json())
      .then(result => {
        const movies = result.data.movies;
        console.log(movies);
        return movies;
      })
      .then(result => this.setState({ movies: result, isLoading: false }));
  }



  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : movies.map(movie => {
          return <Movie
            id={movie.id}
            year={movie.year}
            title={movie.title}
            summary={movie.summary}
            poster={movie.medium_cover_image}
            rating={movie.rating} />
        })}
      </div>
    )
  }

}

export default App;
