import React, { useEffect, useState } from 'react'


function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function useCompliment(compliments) {
    const [value, setValue] = useState("");
     useEffect(() => {
      setValue(compliments[generateRandomInteger(compliments.length - 1)])
  }, []);
   return value;
  }

function Challenge_06() {

    const compliments = [
        "You're the best compliment in the world",
        "a very handsome person",
        "One of a kind",
        "Fabulous",
        "Can i have an autograph ?",
        "What a beautiful creature !"
    ]

    const compliment = useCompliment(compliments)


  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 06</h1>
            <br />
            <br />
            <div className="border p-20">
                <h1>Click here to get a random compliment</h1>
                <br />
                <br />
                <h3>{compliment}</h3>

            </div>
        </section>
      </div>
  )
}

export default Challenge_06