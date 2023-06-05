import { apiUrl, fetcher } from "./config";
import useSWR from "swr";

export const GetMovieList = (type) => {
  const data = useSWR(apiUrl.getMovieList(type), fetcher);
  return data;
};
export const GetMovieDetails = (movieId) => {
  const data = useSWR(apiUrl.getMovieDetails(movieId), fetcher);
  return data;
};
export const GetMovieCredit = (movieId) => {
  const data = useSWR(apiUrl.getMovieRelated(movieId, "credits"), fetcher);
  return data;
};
export const GetMovieVideo = (movieId) => {
  const data = useSWR(apiUrl.getMovieRelated(movieId, "videos"), fetcher);

  return data;
};
export const GetMovieSimilar = (movieId) => {
  const data = useSWR(apiUrl.getMovieRelated(movieId, "similar"), fetcher);

  return data;
};
export const GetMovieSearch = (query) => {
  const data = useSWR(apiUrl.getMovieSearch(query), fetcher);

  return data;
};
export const GetTvDetails = (tvId) => {
  const data = useSWR(apiUrl.getTvDetails(tvId), fetcher);
  return data;
};
export const GetTvRelated = (tvId, type) => {
  const data = useSWR(apiUrl.getTvRelated(tvId, type), fetcher);
  return data;
};
