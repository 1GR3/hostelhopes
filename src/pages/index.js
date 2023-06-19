import * as React from "react";
import Header from "../components/header";
import "../style/style.css";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <h1>
        Just focus on the good bits of
        <br /> your next adventure.
      </h1>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
