import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { getTrendingFilms } from 'api/getTrendingFilms';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    async function trending() {
      try {
        const { results } = await getTrendingFilms();
        setTrendingFilms(results);
      } catch (error) {
        toast.info(`Something went wrong ${error}`);
      }
    }
    trending();
  }, []);

  return (
    <div>
      <MoviesGallery movies={trendingFilms} />
    </div>
  );
};

export default Home;
