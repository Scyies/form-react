import React from "react";
import Home from "./Home";
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import { Route, Routes } from 'react-router-dom'
import Form1 from "./Form1";
import Form2 from "./Form2";

function App() {


  return (<>
  <ThemeProvider>
    <CSSReset />
      {/* <Home /> */}
      <Routes>
        <Route path="/form-react/" element={<Home />} />
        <Route path="/form-react/form1/" element={<Form1 />} />
        <Route path="/form-react/form2/" element={<Form2 />} />
      </Routes>
  </ThemeProvider>
  </>)
}

export default App;
