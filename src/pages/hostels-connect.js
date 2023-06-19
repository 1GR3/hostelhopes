import * as React from "react";
import Header from "../components/header";
import ConnectForm from "../components/connect-form";

export default function HostelsConnect() {
  return (
    <div className="bg-dark">
      <Header />
      <section className="container text-center dark">
        <h1>
          Own a hostel? <br /> We can help you grow.
        </h1>
        <p>
          If you are a Hostel Owner looking to join the Hostel Hop platform,
          send us a message telling us a bit about your hostel, if you are using
          a channel manager, which one, where it is located and how you heard
          about Hostel Hop. We will be in contact with you soon!
        </p>
        <ConnectForm hostel={true} />
      </section>
    </div>
  );
}
