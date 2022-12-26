export interface Geocode {
    lon: number;
    lat: number;
  }
  export interface LocationSuggestionI {
    text: string;
    type: string;
    payload: {
      location_type: string;
      term: string;
      area: string;
      geo: Geocode;
    };
  }
  
  export const fetchCityAutoComplete = async (
    queryString: string
  ): Promise<LocationSuggestionI[]> => {
    let knownLocations: LocationSuggestionI[] = [];
    if (queryString === '') return [];
  
    await fetch(
      `https://staging-snap.tablecheck.com/v2/autocomplete?locale=en&shop_universe_id=57e0b91744aea12988000001&text=${queryString}`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          accepts: 'application/json'
        }
      }
    )
      .then((response) => response.json())
      .then((data) => {
        const { locations } = data;
        knownLocations = locations.map((location: LocationSuggestionI) => {
          const typedLocation: LocationSuggestionI = location;
          return typedLocation;
        });
      })
      .catch(
        (err) =>
          // console.log(err.message);
          err
      );
  
    return knownLocations;
  };
  