import { ShopDetails } from 'Common/interfaces';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Geocode } from '../Home/fetchAutoComplete';
import { SearchPageWrapper } from '../Home/styles';
import { fetchShopsByQueryLocation } from './fetchShopsByLocation';
import { ShopCard } from './ShopCard';

export function ShopsList(): JSX.Element {
  const geoCode = useParams() as unknown as Geocode;
  const [shops, setShops] = useState<ShopDetails[]>([]);

  useEffect(() => {
    if (geoCode.lat !== 0 && geoCode.lon !== 0) {
      fetchShopsByQueryLocation(geoCode).then((results) => {
        setShops(results);
      });
    }
  }, [geoCode]);

  return (
    <SearchPageWrapper>
      {shops.map((shop) => (
        <ShopCard key={shop.geocode.lat + shop.id} shop={shop} />
      ))}
    </SearchPageWrapper>
  );
}
