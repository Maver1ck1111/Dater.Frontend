import "./Form.css";
import { type FormDataValidation } from "../../Validators/FormDataValidation";
import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import api from "../../Api/Axios";

export default function Register() {
  const navigate = useNavigate();

  const onSubmit = (data: FormDataValidation) => {
    api
      .post("register", {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem("AccessToken", response.data.accessToken);
        localStorage.setItem("RefreshToken", response.data.refreshToken);
      })
      .catch((error) => {
        console.log(error);
        return;
      });

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
