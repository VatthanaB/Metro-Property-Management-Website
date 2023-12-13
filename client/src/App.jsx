import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FiltersProvider } from "./Utils/contexts/FilterManagementContext";
import Homepage from "./pages/seungmien/Homepage";
import ErrorPage from "./pages/Root/ErrorPage";
import RootLayout from "./pages/Root/RootLayout";
import ResultPage from "./pages/ResultPage/ResultPage";
import SearchPage from "./pages/jason/SearchPage";

const underConstructionStyle =
  "text-4xl font-bold text-red-500 flex justify-center items-center w-full h-screen bg-gradient-to-b from-gray-500 to-white";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //  errorElement: <ErrorPage />, for error page
    errorElement: <ErrorPage />,
    id: "root",
    loader: async () => {
      return fetch("http://localhost:5000/properties/all");
    },

    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/about",
        element: <div className={underConstructionStyle}>Coming soon ...</div>,
      },
      {
        path: "/news",
        element: <div className={underConstructionStyle}>Coming soon ...</div>,
      },
      {
        path: "/services",
        element: <div className={underConstructionStyle}>Coming soon ...</div>,
      },
      {
        path: "/property/:id",
        element: <div className={underConstructionStyle}>Coming soon ...</div>,
      },
      {
        path: "/search",
        children: [
          { index: true, element: <SearchPage /> },
          { path: "/search/results", element: <ResultPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <FiltersProvider>
      <RouterProvider router={router} />
    </FiltersProvider>
  );
}

export default App;
