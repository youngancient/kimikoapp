import {
  BackButton,
  Mail,
  NameIcon,
  ShowPwd,
  WhiteLogoPin,
} from "@/components/Icons/Icons";
import { ErrorStyles } from "@/styles/Auth/Login";
import { AuthStyles } from "@/styles/Auth/Signup";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const login = (data: IForm) => {
    if (data) {
      router.push("/dashboard");
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login into your account" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthStyles>
        <div className="fl">
          <div className="logo-div-mobile">
            <WhiteLogoPin />
          </div>
          <div className="logo-div-desktop">
            <WhiteLogoPin />
          </div>
          <div className="form-div">
            <BackButton href="/" />
            <div className="intro">
              <h3>Welcome back!!!</h3>
              <p>
                Manage Your Meds Like a Pro with Kimiko managing a chronic
                condition like diabetes{" "}
              </p>
            </div>
            <form onSubmit={handleSubmit(login)}>
              <div className="fg">
                <div className="form-ele">
                  <label htmlFor="">Email Address</label>
                  <div className="inp">
                    <input
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      id=""
                      placeholder="jude@gmail.com"
                    />
                    <Mail />
                  </div>
                  {errors?.email && errors.email.message && (
                    <ErrorStyles> Email is required</ErrorStyles>
                  )}
                </div>
                <div className="form-ele">
                  <label htmlFor="">Password</label>
                  <div className="inp">
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: 8,
                      })}
                      id=""
                    />
                    <ShowPwd />
                  </div>
                  {errors?.password && errors.password.message && (
                    <ErrorStyles> Password is required</ErrorStyles>
                  )}
                  {errors?.password &&
                    errors?.password.type === "minLength" && (
                      <ErrorStyles>min length is 8</ErrorStyles>
                    )}
                </div>
              </div>
              <div className="btn">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </AuthStyles>
    </>
  );
};

export default Login;
