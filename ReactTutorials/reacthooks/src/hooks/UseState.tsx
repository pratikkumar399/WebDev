import { useState } from "react"

const UseState = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1> UseState Demo</h1>
            <p>useState hook is used to update the current of a variable</p>
            <button onClick={() => setCount(count => count + 1)} style={{ height: '50px', width: '140px', color: "white" }} >Counter : {count}</button>

        </div>
    )
}
export default UseState
