import "./App.css";
import Button from "./components/UI/Button";
import Circle from "./components/Circle";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state) => {
    console.log("state inside App:", state);
    return state.counter.value;
  });
  console.log("count:", count);

  return (
    <div className="App">
      <h1>Counter Redux</h1>
      <Circle count={count}></Circle>
      <div className="buttons">
        <Button type="button">decrease 5</Button>
        <Button type="button">decrease 1</Button>
        <Button type="reset">reset</Button>
        <Button type="button">increase 1</Button>
        <Button type="button">increase 5</Button>
      </div>
    </div>
  );
}

export default App;
