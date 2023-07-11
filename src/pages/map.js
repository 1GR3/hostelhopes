import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";

const MapPage = () => {
  return (
    <>
      <Helmet>
        <title>Hostel Hop</title>
        <meta name="description" content="hostelhop " />
      </Helmet>
      <main className=" text-center bg-hero">
        <section className="container dark">
          <Header />
          <div className="d-flex align-items-center justify-content-center py-5">
            <div className="d-block">
            <h1>Let's see where this map takes you...</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MapPage;

export const Head = () => <title>Map</title>;
