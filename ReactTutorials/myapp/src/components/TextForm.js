import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        console.log("You clicked uppercase");
        setText(text.toUpperCase());
    }
    const handleChange = (event) => {
        console.log("You clicked To change");
        setText(event.target.value);
    }

    // setText("New Text");
    return (
        <>
            <div>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            </div>
            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words and {text.length} characters</p>

            </div>

        </>
    )
}
