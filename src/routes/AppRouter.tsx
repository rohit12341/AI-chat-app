import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "@/pages/NotFoundPage";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";
import ChatPage from "@/pages/ChatPage";
import HomePage from "@/pages/HomePage";

export default function AppRouter() {
  const routes = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    { path: "/chat", element: <ChatPage /> },
    { path: "*", element: <NotFoundPage /> },
  ]);
  return <RouterProvider router={routes} />;
}
