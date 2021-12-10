import { Dimmer, Loader } from "semantic-ui-react";
import styles from "../styles/Loading.module.css";
const Loading = () => {
  return (
    <div className={styles.container}>
      <Dimmer active>
        <Loader size="huge">Loading</Loader>
      </Dimmer>
    </div>
  );
};

export default Loading;
