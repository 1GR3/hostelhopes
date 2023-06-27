import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import ConnectForm from "../components/connect-form";

export default function HostelsConnect() {
  return (
    <>
      <Helmet>
        <title>Hostel Hop | connect your hostel</title>
        <meta name="description" content="hostelhop" />
      </Helmet>
      <div className="bg-dark hostel">
        <section className="container text-center dark">
          <Header light={false} />
          <h1>
            Own a hostel? <br /> We can help you grow.
          </h1>
          <p className="connect">
            If you are a Hostel Owner looking to join the Hostel Hop platform,
            send us a message telling us a bit about your hostel, if you are
            using a channel manager, which one, where it is located and how you
            heard about Hostel Hop. We will be in contact with you soon!
          </p>
          <ConnectForm hostel={true} />
        </section>
      </div>
    </>
  );
}
