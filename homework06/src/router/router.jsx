import { createBrowserRouter, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import HomeRoute from "../routes/HomeRoute";
import LoginRoute from "../routes/LoginRoute";
import RegisterRoute from "../routes/RegisterRoute";
import MapRoute from "../routes/MapRoute";
import AnalyticsRoute from "../routes/AnalyticsRoute";
import FavoritesRoute from "../routes/FavoritesRoute";
import ProfileRoute from "../routes/ProfileRoute";
import LocationDetailsRoute from "../routes/LocationDetailsRoute";
import ErrorRoute from "../routes/ErrorRoute";
import NotFoundRoute from "../routes/NotFoundRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeRoute,
    errorElement: <ErrorRoute />,
  },
  {
    element: <PublicRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          { path: "login", Component: LoginRoute },
          { path: "register", Component: RegisterRoute },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    errorElement: <ErrorRoute />,
    children: [
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Navigate to="map" replace /> },
          { path: "map", Component: MapRoute },
          { path: "analytics", Component: AnalyticsRoute },
          { path: "favorites", Component: FavoritesRoute },
          { path: "profile", Component: ProfileRoute },
          { path: "location/:id", Component: LocationDetailsRoute },
        ],
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundRoute,
  },
]);
