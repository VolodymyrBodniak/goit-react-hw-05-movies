import axios from 'axios';

const KEY = '0048f87df3d0fc70e9be07ecb1359dc1';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
});

export async function getMoviesList() {
  const { data } = await instance.get(`/trending/movie/day?api_key=${KEY}`);
  return data;
}
