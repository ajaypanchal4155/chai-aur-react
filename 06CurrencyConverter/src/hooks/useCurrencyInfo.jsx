import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return; // prevent running if currency is undefined

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]);
            })
            .catch((err) => {
                console.error("Error fetching currency data:", err);
            });
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
