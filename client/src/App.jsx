import { useState, useEffect } from "react";

import axios from "axios";
import "./App.css";

function App() {
  const [greetings, setGreetings] = useState("Hello World");

  useEffect(() => {
    axios.get("http://localhost:5000/greetings").then((res) => {
      console.log(res.data);
      setGreetings(res.data);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Greetings from the Team :</h1>
        <h2>{greetings[0].message}</h2>
      </div>
    </>
  );
}

export default App;
