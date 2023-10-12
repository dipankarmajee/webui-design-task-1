import ReactDOM from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import PageNotFound from "./pages/404Page/PageNotFound";
import "./styles/index.css";

/* BOOTSTRAP */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import WebUIDesignApp from "./app/WebUIDesignApp";
import WebUIDesignLayout from "./layouts/WebUIDesignLayout";
import WebUIDesignPages from "./pages/WebUIDesignPages";

const routesV1 = createBrowserRouter([
  {
    path: "/",
    element: <WebUIDesignApp />,
    children: [
      {
        element: <WebUIDesignLayout />,
        children: [
          {
            element: <WebUIDesignPages />,
            index: true,
          },
        ],
      },

      { path: "page-not-found", element: <PageNotFound /> },
      { path: "*", element: <Navigate to="page-not-found" /> },
    ],
  },

  { path: "*", element: <Navigate to="/todo/dashboard" /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routesV1} />
);
