import "./Form.css";
import { type FormDataValidation } from "../../Validators/FormDataValidation";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import api from "../../Api/Axios";

export default function Register() {
  const navigate = useNavigate();

  const onSubmit = async (data: FormDataValidation) => {
    const response = await api.post("register", {
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
      enterText="Welcome to Dater"
      buttonText="Register"
      link
    />
  );
}
