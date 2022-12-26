import { Dispatch, SetStateAction } from "react";

export interface Geocode {
  lon: number;
  lat: number;
}

export interface ShopDetails {
  id: string;
  slug: string;
  name: {
    ja: string;
    en: string;
  };
  budget_lunch_min: string;
  budget_lunch_max: string;
  budget_dinner_min: string;
  budget_dinner_max: string;
  search_image: string;
  tags: string[];
  kana_name: string;
  cuisines: string[];
  currency: string;
  content_title: {
    ja: string;
    en: string;
  };
  content_body: {
    ja: string;
    en: string;
  };
  geocode: Geocode;
}

export interface ResturantDetailsModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  resturantData: ShopDetails;
}
