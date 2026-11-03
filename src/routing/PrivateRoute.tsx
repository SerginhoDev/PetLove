import { Navigate, Outlet } from "react-router";

import { useAuth } from "@/hooks/useAuth";

import { routes } from "./routes";

const PrivateRoute = () => {
	const { isLoggedIn } = useAuth();

	return isLoggedIn ? <Outlet /> : <Navigate to={routes.LOGIN} replace />;
};

export default PrivateRoute;
