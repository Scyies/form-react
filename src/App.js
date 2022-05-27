import React from "react";
import Home from "./Home";
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Form1 from "./Form1";
import Form2 from "./Form2";

function App() {

  let Component
  switch (window.location.pathname) {
    default:
      Component = Home
      break
    case "/form1":
      Component = Form1
      break
    case "/form2":
      Component = Form2
      break
  } 
  return (<>
  <ThemeProvider>
    <CSSReset />
      <Component/>
  </ThemeProvider>
  </>)
}

export default App;
