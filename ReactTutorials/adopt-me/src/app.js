import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams'

// import Pet from './Pet';

const App = () => {
  return (
    <div >
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};



// {/* <div id="my-app">
// <Pet name="Sheru" animal="Lion" breed="Asian" />
// <Pet name="pepper" animal="Bird" breed="Cocktail" />
// <Pet name="Pillu" animal="Dog" breed="Desi" />
// </div> */}




// const App = () => {
//   return React.createElement("div", {}, [
//     React.createElement("h1", {}, "Adopt Me"),
//     React.createElement(Pet, {
//       name: "Sheru",
//       animal: "Lion",
//       breed: "Asian",
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cocktail",
//     }),
//     React.createElement(Pet, {
//       name: "Pillu",
//       animal: "Dog",
//       breed: "Desi",
//     }),
//   ]);
// };
render(<App />, document.getElementById("root"));
