import { ShopDetails } from 'Common/interfaces';
import { Geocode } from '../Home/fetchAutoComplete';

export const fetchShopsByQueryLocation = async (
  geoCode: Geocode
): Promise<ShopDetails[]> => {
  const { lat } = geoCode;
  const { lon } = geoCode;
  const fetchURL = `https://staging-snap.tablecheck.com/v2/shop_search?geo_latitude=${lat}&geo_longitude=${lon}&shop_universe_id=57e0b91744aea12988000001&locale=en&per_page=50`;

  let shops: ShopDetails[] = [];

  await fetch(fetchURL, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      accepts: 'application/json'
    }
  })
    .then((response) => response.json())
    .then((data) => {
      shops = data.shops.map(
        (shop: {
          _id: string;
          slug: string;
          name: string[];
          budget_lunch_min: string;
          budget_lunch_max: string;
          budget_dinner_min: string;
          budget_dinner_max: string;
          search_image: string;
          tags: string[];
          kana_name: string;
          cuisines: string[];
          currency: string;
          content_title_translations: { translation: string }[];
          content_body_translations: { translation: string }[];
          geocode: Geocode;
        }) => {
          const sd: ShopDetails = {
            id: shop._id,
            slug: shop.slug,
            name: { ja: shop.name[0], en: shop.name[1] },
            budget_lunch_min: shop.budget_lunch_min,
            budget_lunch_max: shop.budget_lunch_max,
            budget_dinner_min: shop.budget_dinner_min,
            budget_dinner_max: shop.budget_dinner_max,
            search_image: shop.search_image,
            tags: shop.tags,
            kana_name: shop.kana_name,
            cuisines: shop.cuisines,
            currency: shop.currency,
            content_title: {
              ja: shop.content_title_translations[0]?.translation,
              en: shop.content_title_translations[1]?.translation
            },
            content_body: {
              ja: shop.content_body_translations[0]?.translation,
              en: shop.content_body_translations[1]?.translation
            },
            geocode: shop.geocode
          };
          return sd;
        }
      );
    })
    .catch((err) =>
      // console.log(err.message);
      ({ err })
    );

  return shops;
};
