import { Button, ButtonAppearance } from '@tablecheck/tablekit-button';
// import { useNavigate } from 'react-router-dom';
import { LocationSuggestionI } from './fetchAutoComplete';

export function SearchSuggestions(props: {
  suggestions: LocationSuggestionI[];
}): JSX.Element {
  const { suggestions } = props;
  //   const navigate = useNavigate();
  const buttonText = (suggestion: LocationSuggestionI): string =>
    suggestion.payload.term +
    (suggestion.payload.area ? `, [${[suggestion.payload.area]}]` : '');

  const handleClick = (suggestion: LocationSuggestionI): void => {
    const { lat, lon } = suggestion.payload.geo;
    const url = `/shops/${lat}/${lon}`;
    // navigate(url);
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
