import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilmReviews } from 'api/getFilmReviews';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';

const Reviews = () => {
  const [reviews, setFilmReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function onFilmReviews() {
      const {
        data: { results },
      } = await getFilmReviews(movieId);
      setFilmReviews(results);
    }
    onFilmReviews();
  }, [movieId]);

  return <div>{reviews.length > 0 && <ReviewsList reviews={reviews} />}</div>;
};

export default Reviews;
