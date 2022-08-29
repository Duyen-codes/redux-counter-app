import "./App.css";
import Button from "./components/UI/Button";
import Circle from "./components/Circle";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  incrementByAmount,
  decrement,
  decrementByAmount,
  reset,
} from "./features/counter/CounterSlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);

  return (
    <div className="App">
      <h1>Counter Redux</h1>
      <Circle count={count}></Circle>
      <div className="buttons">
        <Button type="button" onClick={() => dispatch(decrementByAmount(5))}>
          decrease 5
        </Button>
        <Button type="button" onClick={() => dispatch(decrement())}>
          decrease 1
        </Button>
        <Button type="reset" onClick={() => dispatch(reset())}>
          reset
        </Button>
        <Button type="button" onClick={() => dispatch(increment())}>
          increase 1
        </Button>
        <Button type="button" onClick={() => dispatch(incrementByAmount(5))}>
          increase 5
        </Button>
      </div>
    </div>
  );
}

export default App;
