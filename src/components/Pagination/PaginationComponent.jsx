import React, { useContext } from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import globalContext from '../../Context/globalContext';

const PaginationComponent = () => {
  const context = useContext(globalContext);
  const count = context.count;
  // const productsPerPage = context.productsPerPage;
  const setCurrentPage = context.setCurrentPage;
  const handlePageChange = (e, p) => {
    setCurrentPage(p);
  };

  // const count = Math.ceil(allProducts.length / productsPerPage);
  return (
    <PagDiv>
      <Stack spacing={2}>
        <Pagination onChange={handlePageChange} count={count} />
      </Stack>
    </PagDiv>
  );
};
const PagDiv = styled.div`
  /* background: white;
  display: flex;
  margin: auto; */
  display: grid;
  grid-template-columns: 4fr 7fr;
  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: rgb(88 123 127);
    color: rgb(211 208 203);
  }
  button:hover {
    background-color: #e2c044;
  }
`;

export default PaginationComponent;
