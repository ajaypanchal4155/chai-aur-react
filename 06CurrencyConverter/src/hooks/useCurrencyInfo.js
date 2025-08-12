import {useEffect,useState} from "react"
function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

      .then((res) => res.json())
      .then(res => setData (res[currency]))
      const currency = "usd";
 console.log(currency);
    console.log(data);
      return data;
    },[currency])

}
export default useCurrencyInfo;