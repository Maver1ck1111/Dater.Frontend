import { useForm } from "react-hook-form";
import { loginSchema, type FormDataValidation } from "../../../Validators/LoginValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import "../Form.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const {register, handleSubmit, formState: { errors }} = useForm<FormDataValidation>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur"
    });

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Welcome back</h1>

            <div className={`form-field ${errors.email ? "has-error" : ""}`}>
                <label htmlFor="email">Email</label>
                <input {...register("email")} id="email" placeholder="Enter your email" />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className={`form-field ${errors.email ? "has-error" : ""}`}>
                <label htmlFor="password">Password</label>
                <input {...register("password")} id="password" placeholder="Enter your password"/>
                { errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            <button>login</button>
        </form>
    )
}
