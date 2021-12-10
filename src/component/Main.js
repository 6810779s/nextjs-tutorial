import { Divider, Header } from "semantic-ui-react";
import Head from "next/head";
import ItemList from "../../src/component/ItemList";

const Main = ({ list }) => {
  return (
    <div>
      <Head>
        <title>HOME | Ryn</title>
        <meta name="description" content="은희의 서버사이드 렌더링 공부" />
      </Head>
      <Header
        as="h3"
        icon="chess queen"
        style={{ paddingTop: 40 }}
        content="베스트 상품"
      />
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" icon="gem" style={{ paddingTop: 40 }} content="신상품" />
      <Divider />
      <ItemList list={list.slice(9)} />
    </div>
  );
};

export default Main;
