import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

import globalContext from "../../Context/globalContext";

const PaginationComponent = (props) => {
  let pageNumbersCount = 0;

  // Gets us the correct amount of page numbers
  for (
    let i = 1;
    i <= Math.ceil(props.totalProducts / props.productsPerPage);
    i++
  ) {
    pageNumbersCount++;
  }

  // const context = useContext(globalContext);
  // const count = context.count;
  // const productsPerPage = context.productsPerPage;
  // const setCurrentPage = context.setCurrentPage;
  // const handlePageChange = (e, p) => {
  //   console.log(p);
  //   setCurrentPage(p);
  // };

  // useEffect(() => {
  //   console.log("inside use effect", props.pageName);
  //   setCurrentPage(1);
  // }, [props.pageName]);

  // const count = Math.ceil(allProducts.length / productsPerPage);

  const handlePageChange = (event, value) => {
    console.log("Switched page: ", value);
    props.setCurrentPage(value);
  };

  return (
    <PagDiv>
      <Stack spacing={2}>
        <Pagination onChange={handlePageChange} count={pageNumbersCount} />
      </Stack>
    </PagDiv>
  );
};

const PagDiv = styled.div`
  /* background: white; */
  display: flex;
  justify-content: center;
  text-align: center;
  button {
    color: rgb(253 253 253);
  }
  /* display: grid; */
  /* grid-template-columns: 4fr 7fr; */
  /* .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: rgb(253 253 253);
    color: rgb(38 38 38);
  } */
  button:hover {
    background-color: #e2c044;
  }
`;

export default PaginationComponent;
