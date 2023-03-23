import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";

const SignUpPage = () => {
  return (
    <main className="w-full h-screen bg-light flex flex-col justify-center items-center">
      <section className="bg-light flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-start justify-start space-y-2">
          <h2 className="">Hey, hello 👋</h2>
          <p> Create an account to get started!! </p>
        </div>

        <TextField
          type="text"
          placeholder=""
          label="Email"
          name="Email"
        />

        <Button variant="a" size="">  Check </Button>
      </section>
    </main>
  );
};

export default SignUpPage;
