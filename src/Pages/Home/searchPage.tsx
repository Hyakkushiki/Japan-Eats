import { InputSize, InputShape, Appearance } from '@tablecheck/tablekit-input';
import { useDebounce } from 'Common/helpers';
import { useState, ChangeEvent, useEffect } from 'react';
import {
  LocationSuggestionI,
  fetchCityAutoComplete
} from './fetchAutoComplete';
import { SearchSuggestions } from './searchSuggestions';
import {
  SearchPageWrapper,
  InputSearchWrapper,
  StyledInputWrapper,
  StyledInput
} from './styles';

export function SearchPage(): JSX.Element {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState<LocationSuggestionI[]>([]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const debouncedInputText: string = useDebounce<string>(inputText, 500);

  useEffect(
    () => {
      if (debouncedInputText !== '') {
        fetchCityAutoComplete(debouncedInputText).then((results) => {
          setSuggestions(results);
        });
      }
    },
    [debouncedInputText] // Only call effect if debounced search term changes
  );

  return (
    <SearchPageWrapper>
      <InputSearchWrapper>
        <StyledInputWrapper fieldSize={InputSize.Regular}>
          <StyledInput
            appearance={Appearance.Default}
            label=""
            shape={InputShape.Rounded}
            type="search"
            // width={Size.XXLarge}
            value={inputText}
            onChange={inputHandler}
            message={<SearchSuggestions suggestions={suggestions} />}
            shouldFitContainer
          />
        </StyledInputWrapper>
      </InputSearchWrapper>
    </SearchPageWrapper>
  );
}
