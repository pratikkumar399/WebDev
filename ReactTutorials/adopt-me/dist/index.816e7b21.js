// import React from 'react';
// import ReactDOM from 'react-dom/client';
const Pet = (props)=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed), 
    ]);
};
_c = Pet;
const App = ()=>{
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Adopt Me"),
        React.createElement(Pet, {
            name: "Sheru",
            animal: "Lion",
            breed: "Asian"
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Cocktail"
        }),
        React.createElement(Pet, {
            name: "Pillu",
            animal: "Dog",
            breed: "Desi"
        }), 
    ]);
};
_c1 = App;
ReactDOM.render(React.createElement(App), document.getElementById("root"));
var _c, _c1;
$RefreshReg$(_c, "Pet");
$RefreshReg$(_c1, "App");

//# sourceMappingURL=index.816e7b21.js.map
