import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Outlet, useNavigate } from 'react-router-dom';
import { ShopsList } from './shopsList';

import { HomeHeadline, HomeWrapper } from './styles';

export function Shops(): JSX.Element {
  const [t, { language }] = useTranslation();
  const navigate = useNavigate();

  const handleClick = (): void => {
    navigate('/en');
  };

  return (
    <HomeWrapper>
      <HomeHeadline onClick={handleClick}>
        {t('attributes.titles.headline')}
      </HomeHeadline>
      <ShopsList />
      <Outlet />
      <Helmet>
        <title lang={language}>{`${t('attributes.titles.headline')} - ${t(
          'keywords.app_name'
        )}`}</title>
      </Helmet>
    </HomeWrapper>
  );
}
