import { useHistory, useLocation } from "react-router-dom"
import { InputWrapper } from "./styled";
import { Input } from "../styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";

export const Search = () => {
  const location = useLocation();
  const history = useHistory();

  const query = useQueryParameter(searchQueryParamName);

  const onInputChange = ({target}) => {
    const searchParams = new URLSearchParams(location.search);

    if(target.value.trim() === ""){
      searchParams.delete(searchQueryParamName);
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${searchParams.toString()}`);
  }

  return (
    <InputWrapper>
      <Input
        fullsize
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </InputWrapper>
  )
}