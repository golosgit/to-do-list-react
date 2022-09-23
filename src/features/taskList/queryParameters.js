import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName"

export const useQueryParameter = queryParemeterName => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(queryParemeterName);

  return query;
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  const searchParams = new URLSearchParams(location.search);

  const replaceQueryParamater = ({ key, value }) => {
    if (value) {
      searchParams.set(key, value);
    } else {
      searchParams.delete(searchQueryParamName);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  };

  return replaceQueryParamater;
};
