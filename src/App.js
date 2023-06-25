import { createBrowserRouter, RouterProvider } from "react-router-dom";

//component
import Root from "./pages/root";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";

//layout
import PanelLayout from "./components/common/panelLayout";
import Layout from "./components/common/layout";

//helper component
import ErrorPage from "./pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: <PanelLayout />,
        children: [{ path: "/dashboard", element: <Dashboard /> }],
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
