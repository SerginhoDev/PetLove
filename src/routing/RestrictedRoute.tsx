import { Navigate, Outlet } from "react-router";

import { useAuth } from "@/hooks/useAuth";

import { routes } from "./routes";

const RestrictedRoute = () => {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? <Navigate to={routes.PROFILE} replace /> : <Outlet />;
};

export default RestrictedRoute;
