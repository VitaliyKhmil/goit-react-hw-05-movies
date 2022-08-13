import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList } from '../../../components/CastList/CastList';
import { getFilmCast } from 'api/getFilmCast';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function onFilmCast() {
      const {
        data: { cast },
      } = await getFilmCast(movieId);
      setCasts(cast);
    }
    onFilmCast();
  }, [movieId]);

  return <>{casts && <CastList credits={casts} />}</>;
};

export default Cast;
