import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Phone from "../components/phone";
import Background from "../components/background";
import MobileButtons from "../components/mobile-buttons";
import { useScroll, animated } from "@react-spring/web";
import "../style/style.css";

const IndexPage = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Helmet>
        <title>Hostel Hop</title>
        <meta name="description" content="hostelhop" />
      </Helmet>
      <main>
        <Header landingpage scrollYProgress={scrollYProgress} />
        <section className="container-fluid container-xl text-center">
          <div className="hero m-auto">
            <h1 className="text-white mx-auto">
              Just focus on the good bits of your next adventure.
            </h1>
            <a
              className="btn btn-light d-none d-lg-inline-block"
              href="/hostels-connect"
            >
              Own a hostel? We can help you grow.
            </a>
          </div>
        </section>
        <section className="container-fluid container-xl d-flex justify-content-center align-items-start align-items-lg-center light">
          <div className="row d-block d-lg-none">
            <div className="col col-md-10 mx-auto text-center">
              <h2>Earn points. Hop more.</h2>
              <p className="lead">
                Recommend hostels to your friends and earn points when they
                stay. Use those points to pay for hostels and keep the adventure
                going!
              </p>
            </div>
          </div>
          <div className="row d-none d-lg-flex">
            <div className="col text-center">
              <h2>Earn points.</h2>
              <p className="lead">
                Recommend hostels to your friends and earn points when they
                stay.
              </p>
            </div>
            <div className="col"></div>
            <div className="col text-center">
              <h2>Hop more.</h2>
              <p className="lead">
                Use those points to pay for hostels and keep the adventure
                going!
              </p>
            </div>
          </div>
        </section>
        <section className="container-fluid container-xl d-flex justify-content-center align-items-center dark">
          <div className="row d-block d-lg-none">
            <div className="col col-md-10 mx-auto text-center">
              <h2>Save trips. Share maps.</h2>
              <p className="lead">
                Create maps marking your stops along the way like a playlist of
                your favorite hostels. Share your maps with other hostel hoppers
                and with your followers on social media!
              </p>
              <a
                className="btn btn-success d-lg-none"
                href="/influencers-connect"
              >
                Make passive income sharing your travels
              </a>
            </div>
          </div>
          <div className="row d-none d-lg-flex">
            <div className="col text-center">
              <h2>Save trips.</h2>
              <p className="lead">
                Create maps marking your stops along the way like a playlist of
                your favorite hostels.
              </p>
            </div>
            <div className="col"></div>
            <div className="col text-center">
              <h2>Share maps.</h2>
              <p className="lead">
                Share your maps with other hostel hoppers and with your
                followers on social media!
              </p>
              <a className="btn btn-success" href="/influencers-connect">
                Make passive income sharing your travels
              </a>
            </div>
          </div>
        </section>
        <section className="container-fluid container-xl d-flex justify-content-center align-items-start align-items-lg-center dark">
          <div className="row d-block d-lg-none">
            <div className="col col-md-10 mx-auto text-center">
              <h2>Own a hostel? Get listed.</h2>
              <p className="lead">
                Our rewards program allows users to travel more and stay longer
                at your hostel. Hostel hop takes a lower deposit fee than hostel
                world and booking.com
              </p>
              <a className="btn btn-danger d-lg-none" href="/hostels-connect">
                Own a hostel? We can help you grow!
              </a>
            </div>
          </div>
          <div className="row d-none d-lg-flex">
            <div className="col text-center">
              <h2>Own a hostel?</h2>
              <p className="lead">
                Our rewards program allows users to travel more and stay longer
                at your hostel.
              </p>
            </div>
            <div className="col"></div>
            <div className="col text-center">
              <h2>Get listed.</h2>
              <p className="lead">
                Hostel hop takes a lower deposit fee than hostel world and
                booking.com
              </p>
              <a className="btn btn-danger" href="/hostels-connect">
                Own a hostel? We can help you grow!
              </a>
            </div>
          </div>
        </section>
      </main>
      <MobileButtons scrollYProgress={scrollYProgress} />
      <Phone scrollYProgress={scrollYProgress} />

      <Background scrollYProgress={scrollYProgress} />
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
