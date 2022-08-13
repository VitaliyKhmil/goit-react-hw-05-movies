import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFilmsByKey } from 'api/getFilmsByKey';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Box } from 'components/ui/Box';
import { Searchbar } from 'components/Searchbar/Searchbar';
import Notiflix from 'notiflix';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    async function onKeyWord() {
      let filmName = searchParams.get('name') ?? '';
      if (filmName === '') {
        return;
      } else {
        const { results } = await getFilmsByKey({
          query: filmName,
          page: 1,
        });
        setSearchResult(results);
      }
    }
    onKeyWord();
  }, [searchParams]);

  const handlerSubmit = value => {
    if (value.query.trim() === '') {
      Notiflix.Notify.failure('Please entry something');
      return;
    } else {
      const nextParams = value.query !== '' ? { name: value.query } : {};
      setSearchParams(nextParams);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Searchbar onSubmit={handlerSubmit} value={searchParams.get('name')} />
      <MoviesList movies={searchResult} />
    </Box>
  );
};

export default Movies;
