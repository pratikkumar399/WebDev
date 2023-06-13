import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <nav className="container mx-auto">
                <div>
                    <Link to="/">
                        <img className="" src="/images/logo.png" alt="logo" />
                    </Link>
                    <Link to="/about">About</Link>
                </div>
            </nav>
        </>
    )
}

export default Navigation