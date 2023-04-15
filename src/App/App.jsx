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
import NavLayout from "../Layout/NavLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

const App = () => {
  return (
    // <div>
    //   <Navbar />
    //   <Home />
    // </div>
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
