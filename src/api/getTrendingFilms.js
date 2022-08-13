import { api } from './apiAxios';
import { toast } from 'react-toastify';

export const getTrendingFilms = async () => {
  try {
    const { data } = await api.get('/trending/all/day');
    return data;
  } catch (e) {
    toast.e(`Sorry, something went wrong ${e}`);
  }
};
