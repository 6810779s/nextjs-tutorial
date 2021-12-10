import Link from "next/link";
import { Grid } from "semantic-ui-react";
import styles from "../styles/ItemList.module.css";
export default function ItemList({ list }) {
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.id}>
              <Link href="/view/[id]" as={`/view/${item.id}`}>
                <a>
                  <div className={styles.wrap}>
                    <img
                      src={item.image_link}
                      alt={item.id}
                      className={styles.imgLink}
                    />
                    <strong className={styles.itemName}>{item.name}</strong>
                    <span className={styles.itemInfo}>
                      {item.category} {item.product_type}
                    </span>
                    <strong className={styles.itemPrice}>${item.price}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
