import { api } from './apiAxios';
import { toast } from 'react-toastify';

export const getFilmReviews = async id => {
  try {
    const response = await api.get(`/movie/${id}/reviews`);
    return response;
  } catch (e) {
    toast.e(`Sorry, something went wrong ${e}`);
  }
};
