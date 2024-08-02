import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./component/App";
import SuccessMsg from "./pages/successPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  /**  {
    path: "/success",
    element: <SuccessMsg />,
  },*/
]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
