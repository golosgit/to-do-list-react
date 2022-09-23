import { useLocation } from "react-router-dom";

export const useQueryParameter = queryParemeterName => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(queryParemeterName);

  return query;
};