import styled from '@emotion/styled';
import { Panel } from '@tablecheck/tablekit-panel';

import {
  Headline,
  PageWrapper,
  pageTransitionEasing,
  slideUp,
  BREAKPOINTS,
  CenteredColumnContainer
} from 'styles';

export const HomeWrapper = styled(PageWrapper)`
  max-width: initial;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideUp} ${pageTransitionEasing} 0.5s;
`;

export const HomeHeadline = styled(Headline)`
  text-align: center;
`;

export const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;

export const CardWrapper = styled.div`
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  width: 300px;
  align-content: space-between;
  cursor: pointer;
`;

export const CardHeadWrapper = styled(CenteredColumnContainer)`
  font-weight: 800;

  h1 {
    font-size: 20px;
    // margin: 5px 10px;
    padding: 0 1rem;
    height: 2rem;
    width: 100%;
    height: 100%;
  }
  h4 {
    font-size: 12px;
    margin: 0 15px;
    min-height: 50px;
    color: #5e76be;
  }
`;

export const CardInfoWrapper = styled(CenteredColumnContainer)`
  padding: 0 25px;
  min-height: 100px;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  align-content: flex-end;
  flex-wrap: wrap;
  padding: 0 5px 5px 5px;

  div {
    border-radius: 15px;
    font-size: 8px;
    margin: 0 5px 8px 5px;
    color: #fff;
    padding: 1px 5px;
    text-transform: uppercase;
    background-color: #5e76be;
    ${(props) => props.style?.backgroundColor};
    align-self: end;
  }
`;

export const StyledPanel = styled(Panel)`
  width: 360;
  border-top-right-radius: 20px;
  box-shadow: 10px 20px 15px rgba(0, 0, 0, 0.3);

  @media (min-width: ${BREAKPOINTS.tablet}) {
    width: 768px;
  }
`;

export const ModalWrapper = styled(CenteredColumnContainer)`
  height: 100%;
  align-items: stretch;
  justify-content: space-between;
  color: #5e76be;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    min-height: 4rem;
    color: #fff;
    background-color: #5e76be;
    border-top-right-radius: 20px;
    text-shadow: 1px 1px black;
  }
  div {
    font-size: 12px;
  }
`;

export const ModalHeadWrapper = styled(CenteredColumnContainer)`
  h1 {
    font-size: 1.9rem;
    font-weight: 800;
    padding: 0 1rem;
    height: 2rem;
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

export const PriceRangeWrapper = styled.div`
  div {
    font-size: 1rem;
  }
`;

export const ModalInfoWrapper = styled(CenteredColumnContainer)`
  padding: 0.5rem 1rem 1rem 1rem;
  background-color: #edeff7;
  margin: 0 1rem;
  border-radius: 10px;

  h2 {
    margin: 1rem;
  }
  div {
    color: black;
  }
`;
