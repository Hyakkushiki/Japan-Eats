import styled from '@emotion/styled';
import { Input, InputWrapper } from '@tablecheck/tablekit-input';

import { Headline, PageWrapper } from 'styles';
import { pageTransitionEasing, slideUp } from 'styles';

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
  position: absolute;
  top: 4rem;
`;

export const SearchPageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const InputSearchWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 90%;
  align-items: center;
  justify-content: center;
`;

export const StyledInputWrapper = styled(InputWrapper)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled(Input)`
  padding: 0.5em;
  margin: 0.5em;
  // border: solid;
  width: 300px;
  border-radius: 10px;
`;
