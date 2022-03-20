import React, { useState } from 'react';

const GlobalContext = React.createContext({
  newProducts: [],
  setNewProducts: () => {},
});

export default GlobalContext;
