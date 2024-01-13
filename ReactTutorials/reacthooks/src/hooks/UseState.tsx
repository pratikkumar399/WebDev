import { useState } from "react";
import { Link } from "react-router-dom";

const styled = {
    container: {
        height: "350px",
        width: "350px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "20px auto",
    },
    coloredText: {
        color: "yellow",
        fontSize: "18px",
        margin: "8px 0",
    },
    input: {
        width: "80%",
        padding: "8px",
        marginBottom: "16px",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    link: {
        color: "blue",
        textDecoration: "none",
        display: "block",
        marginTop: "20px",
    },
};

const UseState = () => {
    const [user, setUser] = useState({ name: "", age: 0 });



    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>UseState Demo</h1>

            <form style={styled.container}>
                <p>Name:</p>
                <input
                    type="text"
                    placeholder="Enter your name here"
                    onChange={handleChange}
                    name="name"
                    style={styled.input}
                />
                <p>Age:</p>
                <input
                    type="text"
                    placeholder="Enter your age here"
                    name="age"
                    onChange={handleChange}
                    style={styled.input}
                />
                <p style={styled.coloredText}>Name: {user.name}</p>
                <p style={styled.coloredText}>Age: {user.age}</p>
            </form>

            <Link to={"/"} style={styled.link}>
                Go to the home page
            </Link>
        </div>
    );
};

export default UseState;
