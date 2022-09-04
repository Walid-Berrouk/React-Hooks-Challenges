import React, { useEffect, useState } from 'react'

function Challenge_02() {

    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     console.log("useEffect runs!");
    //     document.title = `You have clicked ${count} times`
    // })

    // console.log("Component re-rendered !");

  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 02</h1>
            <br />
            <br />
            <div className="border p-20">
                <h3>You have clicked {count} times !</h3>
                <button onClick={() => setCount(count + 1)}>Click here !</button>

            </div>
        </section>
      </div>
  )
}

export default Challenge_02