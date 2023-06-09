import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/error";
import { HomePage } from "./pages/home";
import { LoginForm } from "./pages/login";
import { RegistrationForm } from "./pages/register";
import { ReportPage } from "./pages/report";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  { path: "/login", element: <LoginForm /> },
  { path: "/register", element: <RegistrationForm /> },
  { path: "/report", element: <ReportPage /> },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
