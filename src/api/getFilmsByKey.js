import { api } from './apiAxios';
import { toast } from 'react-toastify';

export const params = {
  page: 1,
};

export const getFilmsByKey = async query => {
  try {
    const { data } = await api.get('/search/movie', { params: query });
    return data;
  } catch (e) {
    toast.e(`Sorry, something went wrong ${e}`);
  }
};
