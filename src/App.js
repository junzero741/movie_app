import React from 'react';
import Movie from './Movie';
import './App.scss';


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
        return movies;
      })
      .then(result => this.setState({ movies: result, isLoading: false }));
  }



  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">

            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                rating={movie.rating}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    )
  }
}

export default App;
