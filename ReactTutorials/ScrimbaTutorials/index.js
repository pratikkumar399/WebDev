// import React from "react"
// import ReactDOM from "react-dom/client"
// import Header from "./Header.js"

function Component() {
    return (
        <div>
            <Header />
        </div>
    )
}
function Header() {
    return (
        <header>
            <h1>My webpage</h1>
            <h3>Loving react </h3>

            <ol>
                <li>Its complicated</li>
                <li>Its complicated</li>
                <li>Its complicated</li>
                <li>Its complicated</li>
            </ol>
        </header>
    )
};

// document.getElementById("root").append(Json.stringify(page));
ReactDOM.render(<Component />, document.getElementById("root"))
// ReactDOM.render(navbar1, document.getElementById("root"))
// ReactDOM.createRoot(document.getElementById("root")).render(navbar);