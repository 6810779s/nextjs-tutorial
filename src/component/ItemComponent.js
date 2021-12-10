import { Button, Divider, Header } from "semantic-ui-react";
import styles from "../styles/ItemComponent.module.css";
export default function ItemComponent({ item }) {
  const { image_link, name, price, description } = item;

  return (
    <>
      <Header as="h3" content="상품" style={{ marginTop: 10 }} />
      <div className={styles.wrap} style={{ paddingBottom: 50 }}>
        <div className={styles.itemImg}>
          <img src={image_link} />
        </div>
        <div>
          <p style={{ fontWeight: 800, fontSize: 15 }}>{name}</p>
          <p className={styles.itemPrice}>${price}</p>
          <Button color="blue" content="구매하기" />
        </div>
      </div>
      <Divider />
      <Header as="h3" content="상품 설명" style={{ marginTop: 10 }} />
      <p className={styles.itemDes}>{description}</p>
    </>
  );
}
