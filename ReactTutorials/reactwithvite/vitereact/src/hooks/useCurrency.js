import { useEffect, useState } from "react";

function useCurrency(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json')
            .then(res => res.json())
            .then(res => setData(res[currency]))
        console.log(data);
    }, [currency])

    // we are returning data because we want to use it in our component, and we are returning it as an object because we want to use it as an object in our component. also since we are exporting this function, we can use it in any component we want.
    return data;
}

export default useCurrency;