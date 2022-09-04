import React, { useEffect, useState } from 'react'

function Challenge_04() {

    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    })

  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 04</h1>
            <br />
            <br />
            <div className="border p-20">
                <h1>Let's Fetch some data</h1>
                {isLoading ?
                    <div className="spinner-border" role="status">
                    </div>
                :
                    <div>
                        <br />
                        <br />
                        <br />
                        <h1>Hello, my name is Chemseddine</h1>
                        <code>I have 23 years old</code>
                        <p>I'm a second year student at the university of Annaba</p>
                    </div>
                }

            </div>
        </section>
      </div>
  )
}

export default Challenge_04