import styled from '@emotion/styled';
import { Panel } from '@tablecheck/tablekit-panel';

import {
  Headline,
  PageWrapper,
  pageTransitionEasing,
  slideUp,
  BREAKPOINTS
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
  // min-width: 300;
  // height: 500;
  justify-content: center;
  align-items: center;
  // margin: 50px;
`;

export const CardWrapper = styled.div`
  margin: 10px;
  // background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  // overflow: hidden;
  width: 300px;
  align-content: space-between;
  cursor: pointer;
`;

export const CardHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 800;
  min-height: 100px;

  h1 {
    // text-decoration: underline;
    // border-bottom: 1px solid currentColor;
    font-size: 20px;
    margin: 5px 10px;
    min-height: 25px;
  }
  h4 {
    font-size: 12px;
    margin: 0 15px;
    min-height: 50px;
  }
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
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

export const CardInfoTitle = styled.h2`
  // display: flex;
  // flex-wrap: nowrap;
  // min-width: 300px;
  // height: 100px;
  // justify-content: center;
  // align-items: center;
  // align-content: center;
  // flex-grow: 0;
  // flex-shrink: 0;
`;
export const CardInfoDetails = styled.div`
  // display: flex;
  // flex-wrap: nowrap;
  // min-width: 300px;
  // height: 100px;
  // justify-content: center;
  // align-items: center;
  // align-content: center;
  // flex-grow: 2;
  // flex-shrink: 1;

  font-size: 13px;
  margin: 0 0 40px;
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
    font-size: 10px;
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
  max-width: 360;
  border-top-right-radius: 20px;

  @media (min-width: ${BREAKPOINTS.tablet}) {
    min-width: 768px;
  }
`;

export const ModalWrapper = styled.div`
  text-align: center;
  width: 100%;
  color: #5e76be;

  h1 {
    // text-decoration: underline;
    // border-bottom: 1px solid currentColor;
    font-size: 2rem;
    min-height: 4rem;

    color: #fff;
    padding: 10px;
    background-color: #5e76be;
    border-top-right-radius: 20px;
  }
  div {
    // font-size: 12px;
    // margin: 0 15px;
    // min-height: 50px;
    font-size: 16px;
    // color: #5e76be;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ModalInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  padding: 1rem 1rem 2rem 1rem;
  min-height: 100px;
  background-color: #edeff7;
  margin: 1rem;
  border-radius: 10px;
  // color: black;
`;

export const ModalInfoTitle = styled.h2`
  margin: 1rem;
`;

export const ModalInfoDetails = styled.div`
  color: black;
  // font-size: 13px;
  // margin: 0 0 40px;
`;
