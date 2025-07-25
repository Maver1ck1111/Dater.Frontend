import App from "../components/layout/App";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ProfileForm from "../components/Profile/ProfileForm";

export const routes = [
    { path: "/", element: <App /> },
    { path: "/login", element: <Login/>},
    { path: "/register", element : <Register /> },
    { path: "/profileform", element: <ProfileForm />}
]
