import React from 'react';
import { Document, Page as UnstyledPage } from 'react-pdf';
import styled from 'styled-components';

import LoadingIndicator from 'components/LoadingIndicator';

const Resume = () => (
  <Wrapper>
    <Document file="./resume.pdf" loading={<LoadingIndicator />}>
      <Page pageNumber={1} />
    </Document>
  </Wrapper>
);

const Wrapper = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  min-height: 70vh;
`;

const Page = styled(UnstyledPage)`
  border: solid ${({ theme }) => theme.colours.grey} 1px;
  border-radius: 4px;
  padding: 20px;
`;

export default Resume;
