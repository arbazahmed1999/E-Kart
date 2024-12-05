import { useEffect, useState } from "react";

const UseApi = () => {
  // const [IsOnline, setIsOnline] = useState(true);
  const [allProduct, setAllProduct] = useState();
  const [category, setCategory] = useState();

  const getData = async () => {
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const data = await res.json();
    setAllProduct(data);
    setCategory([...new Set(data.map((item) => item.category))]);
    // console.log(Category);
  };

  // const sorting =()=>{}

  useEffect(() => {
    getData();

    // const handleonline = () => {
    //   setIsOnline(true);
    // };
    // const handleoffline = () => {
    //   setIsOnline(false);
    // };
    // window.addEventListener("online", handleonline);
    // window.addEventListener("offline", handleoffline);

    // return () => {
    //   window.removeEventListener("online", handleonline);
    //   window.removeEventListener("offline", handleoffline);
    // };
  }, []);

  return [allProduct, category];
};

export default UseApi;
