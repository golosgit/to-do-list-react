import { InputWrapper } from "./styled";
import { Input } from "../styled";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";

export const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParamater = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParamater({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <InputWrapper>
      <Input
        fullsize
        placeholder="Filtruj zadania"
        value={query || ""}
        onChange={onInputChange}
      />
    </InputWrapper>
  );
};