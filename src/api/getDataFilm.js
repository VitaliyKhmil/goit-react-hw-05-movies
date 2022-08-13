import { api } from './apiAxios';
import { toast } from 'react-toastify';

export const getDataFilm = async id => {
   try {
     const response = await api.get(`/movie/${id}`);
     return response;
   } catch (error) {
     toast.error(`Sorry, something went wrong ${error}`);
   }
};
