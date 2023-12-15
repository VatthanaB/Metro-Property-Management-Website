import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { FiltersProvider } from "./Utils/contexts/FilterManagementContext";
import Homepage from "./pages/seungmien/Homepage";
import ErrorPage from "./pages/Root/ErrorPage";
import RootLayout from "./pages/Root/RootLayout";
import ResultPage from "./pages/ResultPage/ResultPage";
import SearchPage from "./pages/SearchPage/SearchPage";

// CSS style for the under construction message with tailwind
const underConstructionStyle =
  "text-4xl font-bold text-red-500 flex justify-center items-center w-full h-screen bg-gradient-to-b from-gray-500 to-white";

// Create a browser router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />, // Error page element for the entire application
    id: "root",
    loader: async () => {
      // Fetch data for all routes from the server when the application loads
      return fetch("http://localhost:5000/properties/all");
    },
    children: [
      { index: true, element: <Homepage /> }, // Homepage
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
          { index: true, element: <SearchPage /> }, // Search page
          { path: "/search/results", element: <ResultPage /> }, // Result page
        ],
      },
    ],
  },
]);

// Main App component
function App() {
  return (
    // Wrap the application with the FiltersProvider and RouterProvider
    <FiltersProvider>
      <RouterProvider router={router} />
    </FiltersProvider>
  );
}

// Export the App component
export default App;
