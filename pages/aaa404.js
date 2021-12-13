import { Header, Icon } from "semantic-ui-react";

const Error404 = () => {
  return (
    <div
      style={{
        fontSize: 30,
        padding: "40px 0",
        textAlign: "center",
      }}
    >
      <Icon name="attention" color="red" />
      404 Error...
    </div>
  );
};

export default Error404;
