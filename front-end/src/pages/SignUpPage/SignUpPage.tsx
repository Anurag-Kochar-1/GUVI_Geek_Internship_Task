import AppForm from "../../components/AppForm/AppForm";
import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { registerUser } from "../../utils/helperFunctions";

const SignUpPage = () => {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().min(4).max(15).required("Full Name is required please"),
    email: yup.string().email().required("Enter a valid Email"),
    password: yup
      .string()
      .min(4)
      .max(15)
      .required("Password > 4 && Password < 15 "),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords doesn't match!")
      .required("Confirm Password is required"),
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
    const userData = {
      username: data.name,
      email: data.email,
      password: data.password,
    }

    let registerPromise = registerUser(userData);
    toast.promise(registerPromise, {
      loading: 'Creating...',
      success: <b>Registered Successfully</b>,
      error: <b>Couldn't Registered</b>,
    })

    registerPromise.then((res) => {
      console.log(res)
        navigate("/login");
    }).catch((err) => console.log(err))
  };

  return (
    <main className="w-full bg-light flex flex-col lg:flex-row justify-center items-center overflow-x-hidden overflow-y-auto">
      <Toaster />
      <section className="hidden lg:inline-block w-[50%] xl:w-[60%] 2xl:w-[65%] h-screen from-blue-600 to-purple-500 bg-gradient-to-r"></section>

      <section className="w-[90%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] bg-light flex flex-col justify-center items-center lg:px-10">
        <div className="w-full flex flex-col items-start justify-start space-y-2 my-4">
          <h2 className="text-4xl font-semibold">Hey, hello 👋</h2>
          <p className="text-base font-light text-gray-600">
            {" "}
            Create an account to get started!!{" "}
          </p>
        </div>

        <AppForm
          onSubmit={handleSubmit(onSubmit)}
          className={
            "w-full flex flex-col items-center justify-start space-y-5"
          }
        >
          <TextField
            type="text"
            placeholder=""
            label="Name"
            name="name"
            registerRef={register}
            error={errors?.name?.message}
          />
          <TextField
            type="email"
            placeholder=""
            label="Email"
            name="email"
            registerRef={register}
            error={errors?.email?.message}
          />
          <TextField
            type="password"
            placeholder=""
            label="Password"
            name="password"
            registerRef={register}
            error={errors?.password?.message}
          />
          <TextField
            type="password"
            placeholder=""
            label="Confirm Password"
            name="confirmPassword"
            registerRef={register}
            error={errors?.confirmPassword?.message}
          />
          <Button size="FULL" type={"submit"}>
            Create account
          </Button>

          <Link to={"/login"} className="font-medium text-black text-sm">
            {" "}
            Already user? Log in here
          </Link>
        </AppForm>
      </section>
    </main>
  );
};

export default SignUpPage;
