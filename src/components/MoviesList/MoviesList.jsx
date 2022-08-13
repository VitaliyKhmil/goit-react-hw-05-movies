import { Link, useLocation } from 'react-router-dom';
import { BASE_IMG_URL } from 'constants/apiConstants.js';
import PropTypes from 'prop-types';
import {
  MovList,
  MovListItem,
  MovListItemPoster,
  MovTitle,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovList>
      {movies.map(movie => {
        return (
          <MovListItem key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              { <MovListItemPoster
                  src={BASE_IMG_URL + '/w300' + movie.poster_path}
                  alt=""
                />
              }
              <MovTitle>{movie.title}</MovTitle>
            </Link>
          </MovListItem>
        );
      })}
    </MovList>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
