import React from "react";
import Form from "./Form";
import Home from "./Home";
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/form":
      Component = Form
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
