import React, { useEffect, useState } from 'react'

function Challenge_03() {

    const [count, setCount] = useState(0)

    const [lastAction, setLastAction] = useState("");
  
    const decrement = () => {
      setLastAction("-1");
      setCount(count - 1);
    };

    const increment = () => {
      setLastAction("+1");
      setCount(count + 1);
    };

  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 03</h1>
            <br />
            <br />
            <div className="border p-20">
                <h3>Your Count is {count}</h3>
                    <button onClick={increment}>Plus 1</button>
                    <button onClick={decrement}>Minus 1</button>
                    <p>Last button clicked:</p>
                <h2>{lastAction}</h2>

            </div>
        </section>
      </div>
  )
}

export default Challenge_03