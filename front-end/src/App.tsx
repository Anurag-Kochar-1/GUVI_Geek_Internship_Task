import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  const add = async () => {
    const res = await axios.post(
      `https://anurag-guvi-api.onrender.com/api/register`,
      {
        username: "Anurag_4",
        email: "4@gmail.com",
        password: "123",
      }
    );
    console.log(res);
  };

  const getAll = async () => {
    const res = await axios.get(
      `https://anurag-guvi-api.onrender.com/api/allUsers`
    );
    console.log(res);
  };

  return (
    <main>
      <button onClick={add}> Add </button>
      <button onClick={getAll}> getAll </button>
    </main>
  );
}

export default App;
