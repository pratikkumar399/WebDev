import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';



const UseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //  react to the side effects on the first render or first mount
        console.log("useEffect called");


        // clearnup function to clean the functions that the are not required in the subsequent renders 
        // for that we just need to return the function from the useEffect
        // the dependency array is needed in case when we need to give useEffect some value , so that it can run only when that value changes
        // useEffect handles the updates by default , and therefore it cleans up the previous effects before applying the next effects
    }, [count]);

    function handleClick() {
        setCount(count => count + 1)
    }

    return (
        <div>
            <h1> UseEffect Demo</h1>
            <h4>Open Console to see how the useEffect reacts on click of the button</h4>
            <p>It is used to handle the side effects in the functional components</p>
            <button onClick={handleClick} style={{ height: "50px", width: "120px", borderRadius: "2px", color: "white" }}>Counter</button>
            <p>{count}</p>

            <Link to={"/"} style={{ color: "blue" }}  >
                Go to home page
            </Link>

        </div >

    )
}

export default UseEffect
