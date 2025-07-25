import "./Form.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { FormDataValidation } from "../../Validators/FormDataValidation";
import AuthForm from "./AuthForm";

export default function Login() {
    const navigate = useNavigate();

    const onSubmit = (data : FormDataValidation) => {
        axios.post("api/auth/login", {
            email: data.email,
            password: data.password
        })
        .then(response => {
            localStorage.setItem("AccessToken", response.data.accessToken);
            localStorage.setItem("RefreshToken", response.data.refreshToken);
        })
        .catch(error => {
            console.log(error);
            return;
        });
        
        navigate("/");
    }

    return (
        <AuthForm onSubmitFunction={onSubmit} enterText="Welcome back" buttonText="Login"/>
    )
}
