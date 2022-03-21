import React, { useContext } from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import globalContext from '../../Context/globalContext';

const PaginationComponent = () => {
  const context = useContext(globalContext);
  const allProducts = context.allProducts;
  const productsPerPage = context.productsPerPage;
  const setCurrentPage = context.setCurrentPage;
  const handlePageChange = (e, p) => {
    setCurrentPage(p);
  };

  const count = Math.ceil(allProducts.length / productsPerPage);
  return (
    <PagDiv>
      <Stack spacing={2}>
        <Pagination onChange={handlePageChange} count={count} />
      </Stack>
    </PagDiv>
  );
};
const PagDiv = styled.div`
  background: white;
  display: flex;
  margin: auto;
`;

export default PaginationComponent;
