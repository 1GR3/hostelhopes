import * as React from "react";
import Header from "../components/header";
import ConnectForm from "../components/connect-form";

export default function InfluencersConnect() {
  return (
    <div className="bg-white">
      <Header />
      <section className="container text-center light">
        <h1>
          The freedom to travel <br />
          in the palm of your hand!
        </h1>
        <p>
          Are you an influencer looking to make a passive income sharing your
          travels? Send us a message below including your social media accounts
          and contact information and we will reach out to you soon!
        </p>
        <ConnectForm hostel={true} />
      </section>
    </div>
  );
}
