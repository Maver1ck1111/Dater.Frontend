import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type FormDataValidation } from "../../Validators/FormDataValidation";
import { useForm } from "react-hook-form";

interface FormProps {
  onSubmitFunction: (data: FormDataValidation) => void;
  enterText: string;
  buttonText: string;
  link?: string;
}

export default function Form({onSubmitFunction, enterText, buttonText, link} : FormProps) {

    const {register, formState: { errors }, handleSubmit} = useForm({
        resolver: zodResolver(schema),
        mode: 'onBlur'
    });

    return (
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>{enterText}</h1>

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

            {link && <a>Already have an account</a>}

            <button>{buttonText}</button>
        </form>
    )
}
