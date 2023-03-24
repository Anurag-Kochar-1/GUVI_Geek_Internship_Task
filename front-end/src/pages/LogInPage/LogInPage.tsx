import AppForm from "../../components/AppForm/AppForm";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LogInPage = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().email().required("Enter a valid Email"),
    password: yup
      .string()
      .min(4)
      .max(15)
      .required("Password > 4 && Password < 15 "),
  });

  type FormData = yup.InferType<typeof schema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await axios.post(
      `https://anurag-guvi-api.onrender.com/api/login`,
      {
        email: data.email,
        password: data.password,
      }
    );

    console.log(res);
    if (res.status === 200) {
      toast("Logged In Successfully", {
        duration: 4000,
        position: "top-center",
        icon: "✅",
      });

      localStorage.setItem("token", res?.data?.token);

      navigate("/");
    }
  };

  return (
    <main className="w-full h-screen bg-light flex flex-col lg:flex-row justify-center items-center">
      <section className="hidden lg:inline-block w-[50%] xl:w-[60%] 2xl:w-[65%] h-screen bg-gradient-to-r from-indigo-500 to-fuchsia-300"></section>

      <section className="w-[90%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] bg-light flex flex-col justify-center items-center lg:px-10">
        <div className="w-full flex flex-col items-start justify-start space-y-2 my-4">
          <h2 className="text-4xl font-semibold">Hey there 👋</h2>
          <p className="text-base font-light text-gray-600">
            Enter your account details to get started!
          </p>
        </div>

        <AppForm
          onSubmit={handleSubmit(onSubmit)}
          className={
            "w-full flex flex-col items-center justify-start space-y-5"
          }
        >
          <TextField
            type="email"
            placeholder=""
            label="Email"
            name="email"
            registerRef={register}
            error={errors?.email?.message}
            required
          />
          <TextField
            type="password"
            placeholder=""
            label="Password"
            name="password"
            registerRef={register}
            error={errors?.password?.message}
            required
          />
          <Button size="FULL" type={"submit"}>
            Log in
          </Button>

          <Link to={"/signup"} className="font-medium text-black text-sm">
            {" "}
            New user? Sign up here{" "}
          </Link>
        </AppForm>
      </section>
    </main>
  );
};

export default LogInPage;
