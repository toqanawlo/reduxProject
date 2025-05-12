import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./router/router";
import StoreProvider from "./providers/StoreProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <RouterProvider router={router}></RouterProvider>
    </StoreProvider>
  </StrictMode>
);
