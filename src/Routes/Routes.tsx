import App from "../components/layout/App";
import Login from "../components/Auth/Login/Login";

export const routes = [
    { path: "/", element: <App /> },
    { path: "/login", element: <Login/>},
    { path: "/register", element : <></>}
]
