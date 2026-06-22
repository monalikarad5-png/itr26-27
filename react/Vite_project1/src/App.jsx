import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Products from "./pages/Products/Products";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

//task

// create /products route and render products component in it
// make navbar components and footer components and render them in layout component
// Navlink and Link tag use from react-router-dom to navigate between pages
