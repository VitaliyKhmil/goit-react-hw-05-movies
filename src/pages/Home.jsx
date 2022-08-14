import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'api/getTrendingFilms';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function trending() {
             const { results } = await getTrendingFilms();
        setTrendingFilms(results);      
    }
    trending();
  }, []);

  return (
      <MoviesGallery movies={trendingFilms} />   
  );
};

export default Home;
