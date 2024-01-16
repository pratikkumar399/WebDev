import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>Hooks Demo</h1>
            <h3>Quick Tip : React only shows the updates in the values if the ui is rerendered somehow</h3>
            <ul>
                <li>
                    <Link to="/usestate">UseState</Link>
                </li>
                <li>
                    <Link to="/useeffect">UseEffect</Link>
                </li>
                <li>
                    <Link to="/usecallback">UseCallBack</Link>
                </li>
            </ul>

        </div>
    )
}

export default Home
