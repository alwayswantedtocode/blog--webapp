import React from "react";
import {
  Router,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Pages/Home";

// const router = createBrowserRouter(
//   createRoutesFromElements(<Route path="/"></Route>)
// );

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
