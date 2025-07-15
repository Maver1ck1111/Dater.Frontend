import "./Form.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { FormDataValidation } from "../../Validators/FormDataValidation";
import Form from "./Form";

export default function Login() {
    const navigate = useNavigate();

    const onSubmit = (data : FormDataValidation) => {
        axios.post("https://localhost:7278/api/auth/login", {
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
        <Form onSubmitFunction={onSubmit} enterText="Welcome back" buttonText="Login"/>
    )
}
