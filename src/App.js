import React,{useState} from 'react';
// import {Routes, Route } from "react-router-dom";

//components 
import NavigationMain from './components/Navigation/NavigationMain'

//global Context 
import GlobalContext from './Context/globalContext';

//styles 
import {ThemeProvider} from 'styled-components'
import GlobalStyles from './Styles/GlobalStyles.styled'
import globalTheme from './Styles/GlobalTheme.styled'

function App() {

  const [test, setTest] = useState(false)

  return (
    <GlobalContext.Provider value={{
      test,
      setTest,
    }}>
      <ThemeProvider theme={globalTheme}>
        <GlobalStyles/>
            <NavigationMain />
            {/* <Routes> */}
     
            {/* </Routes> */}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}

export default App;
