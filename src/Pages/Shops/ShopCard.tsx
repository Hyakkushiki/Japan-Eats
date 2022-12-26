import { PanelPosition } from '@tablecheck/tablekit-panel';
import { Descriptions } from 'Common/Descriptions';
import { ResturantDetailsModalProps, ShopDetails } from 'Common/interfaces';
import { useState } from 'react';
import { ModalDisplay } from './ModalDisplay';
import {
  StyledPanel,
  CardWrapper,
  CardHeadWrapper,
  StyledImg,
  CardInfoWrapper,
  CardInfoTitle,
  CardInfoDetails
} from './styles';

function ResturantDetailsModal({
  isOpen,
  setIsOpen,
  resturantData
}: ResturantDetailsModalProps) {
  return (
    <StyledPanel
      onClickCapture={() => setIsOpen(false)}
      onClickOutside={() => setIsOpen(false)}
      position={PanelPosition.Left}
      width="360px"
      isOpen={isOpen}
    >
      <ModalDisplay shop={resturantData} />
    </StyledPanel>
  );
}

export function ShopCard(props: { shop: ShopDetails }): JSX.Element {
  const { shop } = props;
  const { name, kana_name, cuisines, content_title } = shop;
  let { search_image } = shop;
  const backupImg =
    'https://msp.c.yimg.jp/images/v2/FUTi93tXq405grZVGgDqG1NnKmjvw0XwJS07vqrClaH5k_cxFeXK3WXr0rhMXzEXveIwXcYv2rkZNtsdds61P5musvWdgAYwlBWb-ZWNt18sPRK5o71pQ33itxjQwnMRKmWlkrcCgV5ErsG08TTyXm81IaCfIOVs22urZQ6bWfOhOkD_nY_Ml9BSwf4vIQ6c88L0Ofo3cjJYzbFyRD1terK3P5k-SjvcgsvafWQlXKW_rXV-OcID9bNc11o63Z-tHs7o1_f524-YHNUWzoJ74urSRd7TWGP3H62hOnn9zIJY3Sk0r_w3NBPCH9r63xcWIwh1Ed7eHn0CbWsCSk2ntnfrvD_AHb3GNMi-RgdWHTdJ3O-k6F4c3DXwAZ615DvkaDgD4MWusyAOFbavaPteiYqX0ZRPCE1KxH-iYormH2gN-j18MwxhkL8ewYkDOVFoWLYA-7tPLPVYe-qxCr140oSJnK2XsP7E0NZmp34CTA7cPObmyEl8pnYLlkdMXWqy7M8wm2RDU82vmIFN1Pv4RY6LZ94mWkTMfPpgie9hHwxan_RcnODeu9Xi2iCf85HFDfgt_RfphK1cUa8FjUZ0kgJdfYEohWEv8w2avRR1iII-FiObiYud1cvt22cdYKGAgqO1X22Rk0RuBSSCECZUNdOmI4mP-_kO7JdLACEpPpW4xsOpTLWZalc30ag4fBsu8y0hTXQKpwWD6CL_LIa3Dv3huMnmJQx33mYyZv_E9l1ifBU4p_YuoCE3ZBMlp_cBYC2E5qNof8WVndQ3bb1MGKTjgd1-LrwtgxRP-mitSYQq-CuXFVfw-3yCTgJuB9Y_hyG12m24SvSp5ocupSmxdUYEbY0UhffqpPRl9DfAN4MQ-YzSgBnu6SqDkBPtRFfdy9KwwmVmTgdnLVpmo2JclmaPFay-C5pAZdFc65es_silNqhCkL6KfuWSYsMq5pDR2Prg_Mw13nM_AmA9NdDBp95yUPEwRYpHSh2Ty8SqE-Nt89wSOy-JEx9t14X3MsB-hCMMART10XB2GlT736NDkA==/90?errorImage=false';
  search_image = search_image !== undefined ? search_image : backupImg;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CardWrapper onClick={() => setIsOpen(true)}>
      <CardHeadWrapper>
        <StyledImg src={search_image} alt="Resturant Picture" />
        <h1>{name.en}</h1>
        <h4>{kana_name}</h4>
      </CardHeadWrapper>
      <CardInfoWrapper>
        <CardInfoTitle>
          <p>{content_title.en}</p>
        </CardInfoTitle>
        <CardInfoDetails />
      </CardInfoWrapper>
      <Descriptions cuisines={cuisines} />

      <ResturantDetailsModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        resturantData={shop}
      />
    </CardWrapper>
  );
}
