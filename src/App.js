import { createBrowserRouter, RouterProvider } from "react-router-dom";

//component
import Auth from "./pages/auth";

//layout
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
        path: "/auth",
        element: <Auth />,
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
