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
      { path: "/about", element: <h1>About</h1> },
      { path: "/contact", element: <h1>Contact</h1> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
