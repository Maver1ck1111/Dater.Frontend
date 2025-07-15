import App from "../components/layout/App";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";

export const routes = [
    { path: "/", element: <App /> },
    { path: "/login", element: <Login/>},
    { path: "/register", element : <Register />}
]
