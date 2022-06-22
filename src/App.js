import React from "react";
import Home from "./Home";
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Form1 from "./Form1";
import Form2 from "./Form2";
import History from "./History";

function App() {


  return (<>
  <ChakraProvider>
    <CSSReset />
      <Routes>
        <Route path="/form-react/" element={<Home />} />
        <Route path="/form-react/form1/" element={<Form1 />} />
        <Route path="/form-react/form2/" element={<Form2 />} />
        <Route path="/form-react/history" element={<History />} />
      </Routes>
  </ChakraProvider>
  </>)
}

export default App;
