import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";
export default function Top() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "100px 0 0", paddingTop: 20 }}>
          <img
            src="./images/E.png"
            alt="logo"
            style={{ display: "block", width: 80, height: 80 }}
          />
        </div>
        <Header as="h1">Ryn</Header>
      </div>
      <Gnb />
    </div>
  );
}
