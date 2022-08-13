import { api } from './apiAxios';
import { toast } from 'react-toastify';

export const getFilmCast = async id => {
  try {
    const response = await api.get(`/movie/${id}/credits`);
    return response;
  } catch (e) {
    toast.e(`Sorry, something went wrong ${e}`);
  }
};
