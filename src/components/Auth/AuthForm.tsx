import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type FormDataValidation } from "../../Validators/FormDataValidation";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface FormProps {
  onSubmitFunction: (data: FormDataValidation) => void;
  enterText: string;
  buttonText: string;
  link?: boolean;
}

export default function AuthForm({onSubmitFunction, enterText, buttonText, link} : FormProps) {

    const {register, formState: { errors }, handleSubmit} = useForm({
        resolver: zodResolver(schema),
        mode: 'onBlur'
    });

    return (
        <form onSubmit={handleSubmit(onSubmitFunction)} className="auth-form">
            <h1>{enterText}</h1>

            <div className={`form-field ${errors.email ? "has-error" : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                {...register("email")}
                id="email"
                placeholder="Enter your email"
                type="email"
                autoComplete="email"
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>

            <div className={`form-field ${errors.password ? "has-error" : ""}`}>
                <label htmlFor="password">Password</label>
                <input
                {...register("password")}
                id="password"
                placeholder="Enter your password"
                type="password"
                autoComplete="current-password"
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
            </div>

            {link && (
                <Link to="/login" className="login-link">
                Already have an account?
                </Link>
            )}

            <button type="submit" className="submit-btn">{buttonText}</button>
        </form>
    )
}
