import Listing from "./UseEffect/Listing";
import Timer from "./UseEffect/Timer";
import Count from "./UseRef/Count";
import ListItems from "./UseRef/ListItems";
import Background from "./UseState/background";
import Form from "./UseState/Form";

export default function Home() {
  return (
    <div>
      <div>
        <h1 style={{ color: "red" }}>UseState</h1>
        <Background />
        <Form />
      </div>
      <h1 style={{ color: "red" }}>UseEffect</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Listing />
        <Timer />
      </div>
      <h1 style={{ color: "red" }}>UseRef</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <Count />
        <ListItems />
      </div>
    </div>
  );
}
