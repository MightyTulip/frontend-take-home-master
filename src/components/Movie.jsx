import { Chip, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { styled } from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import StyledTitle from '../styles/movieTitle';
import StyledDetail from '../styles/movieDetail';
import StyledRatingsList from '../styles/movieRatingsList';
import StyledRating from '../styles/moveRating';

const StyledSpan = styled.span`
  margin-left: 0.5rem;
`;

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [genreList, setgenreList] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovie = async () => {
    setLoading(true);
    try {
      const resp = await fetch(`http://localhost:3000/api/search?id=${id}`);
      const result = await resp.json();
      setMovie(result);
    } catch (e) {
      console.warn('Error fetching the Movie');
    }

    setLoading(false);
  };

  useEffect(() => {
    if (!movie) return;
    const { Genre: genre } = movie;

    setgenreList(genre.split(','));
  }, [movie]);

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <>
      <Link to="/">
        <HomeIcon fontSize="large" color="secondary" />
      </Link>
      {loading && <div className="loader" />}
      {!loading && movie && (
      <div>
        <StyledTitle>
          <h1 style={{ margin: 0 }}>{movie.Title}</h1>
          <Typography variant="subtitle1">{movie.Year}</Typography>
          <img src={movie.Poster} alt={movie.Title} />
        </StyledTitle>
        <StyledDetail>
          <div>
            {movie.Plot}
          </div>
          <div>
            <b>Genre:</b>
            {genreList.map((genre) => (
              <Chip
                key={genre}
                label={genre}
                variant="outlined"
                color="secondary"
                style={{ margin: '0 0.4em' }}
              />
            ))}
          </div>
          <div>
            <b>Director:</b>
            <StyledSpan>{movie.Director}</StyledSpan>
          </div>
          <div>
            <b>Writers:</b>
            <StyledSpan>{movie.Writer}</StyledSpan>
          </div>
          <div>
            <b>Stars:</b>
            <StyledSpan>{movie.Actors}</StyledSpan>
          </div>
          <StyledRatingsList>
            {movie.Ratings.map((rating) => (
              <StyledRating
                key={rating.Source}
              >
                <div>{rating.Source}</div>
                <div>{rating.Value}</div>
              </StyledRating>
            ))}
          </StyledRatingsList>
        </StyledDetail>
      </div>
      )}
    </>
  );
}

export default Movie;
