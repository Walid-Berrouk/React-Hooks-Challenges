import React, { useEffect, useState } from 'react'

function Challenge_05() {

    const [firstState, setFirstState] = useState(0)
    const [secondState, setSecondState] = useState(0)
    const [thirdState, setThirdState] = useState(0)
  
    // useEffect(() => {
    //    console.log("FirstState : I have been updated to the following : ", firstState)
    // }, [firstState])

    // useEffect(() => {
    //    alert("SecondState : I have been updated to the following : " + secondState)
    // }, [secondState])

    // useEffect(() => {
    //    localStorage.setItem("ThirdState", thirdState)
    // }, [thirdState])


  return (
    <div>
        <br />
        <br />
        <section className="h-full">
            <h1 className="">Challenge 05</h1>
            <br />
            <br />
            <div className="border p-20">
                <h1>Choose your data</h1>
                <div className='flex justify-center'>
                    <div className='ml-5 border p-20'>
                        <h2>I'm a console state : {firstState}</h2>
                        <p>Click here to see me change in the console</p>
                        <button className='btn btn-primary' onClick={() => setFirstState(firstState + 1)}>Click here</button>
                    </div>
                    <div className='ml-5 border p-20'>
                        <h2>I'm an alert state : {secondState}</h2>
                        <p>Click here to see me change right away</p>
                        <button className='btn btn-primary' onClick={() => setSecondState(secondState + 1)}>Click here</button>
                    </div>
                    <div className='ml-5 border p-20'>
                        <h2>I'm a local storage state : {thirdState}</h2>
                        <p>Click here to see me change in the local storage</p>
                        <button className='btn btn-primary' onClick={() => setThirdState(thirdState + 1)}>Click here</button>
                    </div>
                </div>

            </div>
        </section>
      </div>
  )
}

export default Challenge_05