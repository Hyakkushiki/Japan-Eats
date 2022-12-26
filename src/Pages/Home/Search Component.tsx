import { Button, ButtonAppearance } from '@tablecheck/tablekit-button';
import { InputSize, InputShape, Appearance } from '@tablecheck/tablekit-input';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDebounce } from 'Common/helpers';

import {
  LocationSuggestionI,
  fetchCityAutoComplete
} from './fetchAutoComplete';
import {
  InputSearchWrapper,
  SearchPageWrapper,
  StyledInput,
  StyledInputWrapper
} from './styles';

export function SearchSuggestions(props: {
  suggestions: LocationSuggestionI[];
}): JSX.Element {
  const { suggestions } = props;
  const navigate = useNavigate();
  const buttonText = (suggestion: LocationSuggestionI): string =>
    suggestion.payload.term +
    (suggestion.payload.area ? `, [${[suggestion.payload.area]}]` : '');

  const handleClick = (suggestion: LocationSuggestionI): void => {
    const { lat, lon } = suggestion.payload.geo;
    const url = `/shops/${lat}/${lon}`;
    navigate(url);
  };
  return (
    <>
      {suggestions.length > 0 &&
        suggestions.map((suggestion) => (
          <Button
            key={suggestion.payload.geo.lat}
            appearance={ButtonAppearance.Subtle}
            style={{ width: '100%' }}
            onClick={() => handleClick(suggestion)}
          >
            {buttonText(suggestion)}
          </Button>
        ))}
    </>
  );
}

export function SearchPage(): JSX.Element {
  const [inputText, setInputText] = React.useState('');
  const [suggestions, setSuggestions] = React.useState<LocationSuggestionI[]>(
    []
  );

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const debouncedInputText: string = useDebounce<string>(inputText, 500);

  React.useEffect(() => {
    if (debouncedInputText !== '') {
      fetchCityAutoComplete(debouncedInputText).then((results) => {
        setSuggestions(results);
      });
    }
  }, [debouncedInputText]);

  return (
    <SearchPageWrapper>
      <InputSearchWrapper>
        <StyledInputWrapper fieldSize={InputSize.Regular}>
          <StyledInput
            appearance={Appearance.Default}
            label=""
            shape={InputShape.Rounded}
            type="search"
            //   width={Size.XXLarge}
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
