import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homepage from "./pages/vatthana/Homepage";
import ErrorPage from "./pages/Root/ErrorPage";
import RootLayout from "./pages/Root/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //  errorElement: <ErrorPage />, for error page
    errorElement: <ErrorPage />,

    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/properties",
        children: [
          { index: true, element: <h1>Properties</h1> },
          { path: "/result", element: <h1>Property</h1> },
          { path: "/:id", element: <h1>Property</h1> },
        ],
      },
      { path: "/about", element: <h1>About</h1> },
      { path: "/contact", element: <h1>Contact</h1> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
