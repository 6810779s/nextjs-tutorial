import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../src/component/Loading";
import Main from "../src/component/Main";

export default function Home() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  const getData = () => {
    setLoading(true);

    axios
      .get(API_URL)
      .then((res) => {
        console.log("res:", res.data);
        setList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {loading ? <Loading /> : <Main list={list} />}
    </div>
  );
}
