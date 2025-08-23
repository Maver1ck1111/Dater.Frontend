import App from "../components/layout/App";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import ProfileForm from "../components/Profile/ProfileForm";
import { createBrowserRouter } from "react-router-dom";
import ChatsPage from "../components/chatsPage/ChatsPage";

export const routes = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/profileform", element: <ProfileForm /> },
  { path: "/chats", element: <ChatsPage /> },
]);
