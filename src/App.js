import React from "react";
// import { Route, Routes, Link } from "react-router-dom";
import Form from "./Form";
import Home from "./Home";

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
  <Component/>
  </>)
}

export default App;
