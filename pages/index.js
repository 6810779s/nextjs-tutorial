import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import { List } from "semantic-ui-react";
import ItemList from "../src/component/ItemList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [list, setList] = useState([]);

  const API_URL =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

  function getData() {
    axios
      .get(API_URL)
      .then((res) => {
        console.log("res:", res.data);
        setList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Head>
        <title>HOME | Ryn</title>
      </Head>
      <ItemList list={list} />
    </div>
  );
}
