import { createBrowserRouter, Navigate } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import AddPetPage from "@/pages/AddPetPage/AddPetPage";
import FriendsPage from "@/pages/FriendsPage/FriendsPage";
import HomePage from "@/pages/HomePage/HomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import NewsPage from "@/pages/NewsPage/NewsPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import NoticesPage from "@/pages/NoticesPage/NoticesPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import RegistrationPage from "@/pages/RegistrationPage/RegistrationPage";
import { routes } from "@/routing/routes";

export const router = createBrowserRouter([
	{
		path: routes.ROOT,
		element: <MainLayout />,
		children: [
			{ index: true, element: <Navigate to={routes.HOME} replace /> },
			{ path: routes.HOME, element: <HomePage /> },
			{ path: routes.NEWS, element: <NewsPage /> },
			{ path: routes.NOTICES, element: <NoticesPage /> },
			{ path: routes.FRIENDS, element: <FriendsPage /> },
			{ path: routes.ADD_PET, element: <AddPetPage /> },
			{ path: routes.PROFILE, element: <ProfilePage /> },
			{ path: routes.REGISTER, element: <RegistrationPage /> },
			{ path: routes.LOGIN, element: <LoginPage /> },
			{ path: "*", element: <NotFoundPage /> },
		],
	},
]);
