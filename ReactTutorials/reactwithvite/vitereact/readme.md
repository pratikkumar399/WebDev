## All about hooks

### What is a hook?

- ```A hook is a function that is called at a specific time during the execution of a program. Hooks are typically used to change the behavior of a program. They allow you to modify the way a program works without changing the program itself. They are therefore a very useful tool for programmers.```

-> Hooks in react :

- ```Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.```


### What are the hooks available in react?

- ```useState```
- ```useEffect``` 
- ```useContext``` 
- ```useReducer``` 
- ```useCallback``` 
- ```useMemo``` 
- ```useRef``` 
- ```useImperativeHandle``` 
- ```useLayoutEffect``` 
- ```useDebugValue```


> useState

```js

import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

```

> useReducer

```js

import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, {count: initialCount});
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

```

> useEffect

```js

import React, { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

```

