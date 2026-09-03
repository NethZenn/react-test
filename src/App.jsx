import "./App.css";
import { useState } from "react";
export default function App() {
  const [isShow, setIsShow] = useState(false)
  const click = () => {
    setIsShow(!isShow);
  }
  return (
    <>
      <div className="box">
        <h1>
          Hello, This is just a test for learning how to host a React project in
          Github
        </h1>
        <button onClick={() => click()}>Click Me</button>
      </div>
      {isShow && <h1>Hello World</h1>}
    </>
  );
}
