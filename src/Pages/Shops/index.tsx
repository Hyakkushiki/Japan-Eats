import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { ShopsList } from "./ShopsList";

import { HomeWrapper } from "./styles";

export function Shops(): JSX.Element {
  const [t, { language }] = useTranslation();

  return (
    <HomeWrapper>
      <ShopsList />
      <Outlet />
      <Helmet>
        <title lang={language}>{`${t("attributes.titles.headline")} - ${t(
          "keywords.app_name"
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
}
