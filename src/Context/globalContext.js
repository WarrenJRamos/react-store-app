import React, { useState } from "react";

const GlobalContext = React.createContext({
  allProducts: [],
  newProducts: [],
  setNewProducts: () => {},
});

export default GlobalContext;
