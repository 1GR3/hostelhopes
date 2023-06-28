import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import ConnectForm from "../components/connect-form";

export default function InfluencersConnect() {
  return (
    <>
      <Helmet>
        <title>Hostel Hop | connect with us</title>
        <meta name="description" content="hostelhop" />
      </Helmet>
      <div className="bg-white influencer">
        <section className="container text-center light">
          <Header light={true} />
          <h2>
            The freedom to travel <br />
            in the palm of your hand!
          </h2>
          <p className="connect">
            Are you an influencer looking to make a passive income sharing your
            travels? Send us a message below including your social media
            accounts and contact information and we will reach out to you soon!
          </p>
          <ConnectForm hostel={false} />
        </section>
      </div>
    </>
  );
}
