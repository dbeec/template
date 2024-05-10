import "./login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required("This email isn't valid, ¿Try again?"),
    password: yup
      .string()
      .required("It cannot be an empty password")
      .min(6, "Password must contain at least 6 characters"),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // send form
  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
    reset();
  });

  return (
    <>
      <div className="main-content">
        <div className="image-section">{/* <img src="" alt="" /> */}
        <h1>QuintApp</h1></div>

        <div className="form-section">
          <div className="signin-welcome">
            <h2>Welcome back</h2>
            <h3>QuintApp</h3>
          </div>

          <form onSubmit={onSubmit}>
            <label htmlFor="email">email*</label>
            <input type="email" id="email" {...register("email")} />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}

            <label htmlFor="password">password*</label>
            <input type="password" id="password" {...register("password")} />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}

            <button type="submit">Sign In</button>

            <div className="signin-helper">
              <span>
                <a href="/">¿Forgot password?</a>
              </span>
              <span>
                ¿Don't have an account? <a href="/">Sign Up</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
