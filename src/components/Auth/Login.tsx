import "./Form.css";
import { useNavigate } from "react-router-dom";
import type { FormDataValidation } from "../../Validators/FormDataValidation";
import AuthForm from "./AuthForm";
import api from "../../Api/Axios";

export default function Login() {
  const navigate = useNavigate();

  const onSubmit = async (data: FormDataValidation) => {
    const response = await api.post("/login", {
      email: data.email,
      password: data.password,
    });

    localStorage.setItem("AccessToken", response.data.accessToken);
    localStorage.setItem("RefreshToken", response.data.refreshToken);

    navigate("/");
  };

  return (
    <AuthForm
      onSubmitFunction={onSubmit}
      enterText="Welcome back"
      buttonText="Login"
    />
  );
}
