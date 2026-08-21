import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/layout/RootLayout";
import { SimulationFormPage } from "./pages/SimulationFormPage";
import { SimulationResultsPage } from "./pages/SimulationResultsPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout/>,
    children: [
      {
        path: "/",
        element: < SimulationFormPage/>,
      },
      {
        path: "/historico",
        element: <h1> Historico do resultado </h1>,
      },
      {
        path: "/resultado/:id",
        element: <SimulationResultsPage/>,
      },
    ],
  },
]);
