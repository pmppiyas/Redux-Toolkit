import { useState } from "react";

import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const [InputAmount, setInputAmount] = useState<number>(0);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
    setInputAmount(0);
  };

  const handleDecrement = (amount: number) => {
    dispatch(decrement(amount));
    setInputAmount(0);
  };
  return (
    <div className=" flex  flex-col items-center justify-center min-h-screen bg-gray-200 space-y-2">
      <h1 className="text-center text-5xl font-semibold">Redux Practice App</h1>

      <h2 className="text-xl font-medium">
        Count: <span>{count}</span>
      </h2>

      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="number"
          className="bg-gray-100 border-2 rounded-lg"
          value={InputAmount}
          onChange={(e) => setInputAmount(Number(e.target.value))}
        ></input>
      </form>

      <div className="flex  gap-8 flex-wrap">
        <button
          onClick={() => handleIncrement(InputAmount || 1)}
          className="btn btn-primary bg-green-500"
        >
          InputAmount || 1 Increment
        </button>

        <button
          onClick={() => handleDecrement(InputAmount || 1)}
          className="btn btn-error bg-red-500"
        >
          InputAmount || 1 Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
