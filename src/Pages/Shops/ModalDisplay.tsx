import { Descriptions } from 'Common/Descriptions';
import { ShopDetails } from 'Common/interfaces';
import {
  ModalWrapper,
  ModalInfoWrapper,
  PriceRangeWrapper,
  ModalHeadWrapper
} from './styles';

export function ModalDisplay(props: { shop: ShopDetails }): JSX.Element {
  const { shop } = props;
  const {
    name,
    tags,
    cuisines,
    content_title,
    budget_lunch_min,
    budget_lunch_max,
    budget_dinner_min,
    budget_dinner_max,
    content_body
  } = shop;
  let { search_image } = shop;
  const backupImg =
    'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG1NnKmjvw0XwJS07vqrClaH5k_cxFeXK3WXr0rhMXzEXveIwXcYv2rkZNtsdds61P5musvWdgAYwlBWb-ZWNt18sPRK5o71pQ33itxjQwnMRKmWlkrcCgV5ErsG08TTyXm81IaCfIOVs22urZQ6bWfOhOkD_nY_Ml9BSwf4vIQ6c88L0Ofo3cjJYzbFyRD1terK3P5k-SjvcgsvafWQlXKW_rXV-OcID9bNc11o63Z-tHs7o1_f524-YHNUWzoJ74urSRd7TWGP3H62hOnn9zIJY3Sk0r_w3NBPCH9r63xcWIwh1Ed7eHn0CbWsCSk2ntnfrvD_AHb3GNMi-RgdWHTdJ3O-k6F4c3DXwAZ615DvkaDgD4MWusyAOFbavaPteiYqX0ZRPCE1KxH-iYormH2gN-j18MwxhkL8ewYkDOVFoWLYA-7tPLPVYe-qxCr140oSJnK2XsP7E0NZmp34CTA7cPObmyEl8pnYLlkdMXWqy7M8wm2RDU82vmIFN1Pv4RY6LZ94mWkTMfPpgie9hHwxan_RcnODeu9Xi2iCf85HFDfgt_RfphK1cUa8FjUZ0kgJdfYEohWEv8w2avRR1iII-FiObiYud1cvt22cdYKGAgqO1X22Rk0RuBSSCECZUNdOmI4mP-_kO7JdLACEpPpW4xsOpTLWZalc30ag4fBsu8y0hTXQKpwWD6CL_LIa3Dv3huMnmJQx33mYyZv_E9l1ifBU4p_YuoCE3ZBMlp_cBYC2E5qNof8WVndQ3bb1MGKTjgd1-LrwtgxRP-mitSYQq-CuXFVfw-3yCTgJuB9Y_hyG12m24SvSp5ocupSmxdUYEbY0UhffqpPRl9DfAN4MQ-YzSgBnu6SqDkBPtRFfdy9KwwmVmTgdnLVpmo2JclmaPFay-C5pAZdFc65es_silNqhCkL6KfuWSYsMq5pDR2Prg_Mw13nM_AmA9NdDBp95yUPEwRYpHSh2Ty8SqE-Nt89wSOy-JEx9t14X3MsB-hCMMART10XB2GlT736NDkA==/90?errorImage=false';
  search_image = search_image !== undefined ? search_image : backupImg;

  const formatJPYCurrency = (budgetMin: string, budgetMax: string): string => {
    const formatJPY = new Intl.NumberFormat('ja-JP', {
      style: 'currency',
      currency: 'JPY'
    });
    const budgetMinInt = parseInt(budgetMin, 10);
    const budgetMaxInt = parseInt(budgetMax, 10);
    let formattedBudgetMin = formatJPY.format(budgetMinInt);
    formattedBudgetMin =
      formattedBudgetMin === '￥NaN' ? '' : formattedBudgetMin;
    let formattedBudgetMax = formatJPY.format(budgetMaxInt);
    formattedBudgetMax =
      formattedBudgetMax === '￥NaN' ? '' : formattedBudgetMax;

    return `${formattedBudgetMin} ~${formattedBudgetMax}`;
  };
  return (
    <ModalWrapper>
      <ModalHeadWrapper>
        <h1>{name.en}</h1>
        <img src={search_image} alt="Resturant Picture" />
      </ModalHeadWrapper>
      <PriceRangeWrapper>
        <div>
          Lunch: {formatJPYCurrency(budget_lunch_min, budget_lunch_max)}
        </div>
        <div>
          Dinner: {formatJPYCurrency(budget_dinner_min, budget_dinner_max)}
        </div>
      </PriceRangeWrapper>
      <ModalInfoWrapper>
        <h2>
          {content_title.en === undefined ? content_title.ja : content_title.en}
        </h2>
        <div>
          {content_body.en === undefined ? content_body.ja : content_body.en}
        </div>
      </ModalInfoWrapper>
      <div>
        <Descriptions cuisines={cuisines} />
        <Descriptions cuisines={tags} backgroundColor="#8f60be" />
      </div>
    </ModalWrapper>
  );
}
