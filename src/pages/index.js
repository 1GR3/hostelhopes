import * as React from "react";
import Header from "../components/header";
import Phone from "../components/phone";
import "../style/style.css";

const IndexPage = () => {
  return (
    <div>
      <Header />
      <section className="container text-center">
        <h1 className="text-white">
          Just focus on the good bits of your next adventure.
        </h1>
        <a className="btn btn-light" href="/hostels-connect">
          Own a hostel? We can help you grow.
        </a>
      </section>
      <section className="container">
        <div className="row d-block d-md-none">
          <div className="col text-center">
            <h2>Earn points. Hop more.</h2>
            <p className="lead">
              Recommend hostels to your friends and earn points when they stay.
              Use those points to pay for hostels and keep the adventure going!
            </p>
          </div>
        </div>
        <div className="row d-none d-md-block">
          <div className="col text-center">
            <h2>Earn points.</h2>
            <p className="lead">
              Recommend hostels to your friends and earn points when they stay.
            </p>
          </div>
          <div className="col"></div>
          <div className="col text-center">
            <h2>Hop more.</h2>
            <p className="lead">
              Use those points to pay for hostels and keep the adventure going!
            </p>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row d-block d-md-none">
          <div className="col text-center">
            <h2>Save trips. Share maps.</h2>
            <p className="lead">
              Create maps marking your stops along the way like a playlist of
              your favorite hostels. Share your maps with other hostel hoppers
              and with your followers on social media!
            </p>
            <a className="btn btn-success" href="/influencers-connect">
              Make passive income sharing your travels
            </a>
          </div>
        </div>
        <div className="row d-none d-md-block">
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
              Share your maps with other hostel hoppers and with your followers
              on social media!
            </p>
            <a className="btn btn-success" href="/influencers-connect">
              Make passive income sharing your travels
            </a>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row d-block d-md-none">
          <div className="col text-center">
            <h2>Own a hostel? Get listed.</h2>
            <p className="lead">
              Our rewards program allows users to travel more and stay longer at
              your hostel. Hostel hop takes a lower deposit fee than hostel
              world and booking.com
            </p>
            <a className="btn btn-danger" href="/hostels-connect">
              Own a hostel? We can help you grow!
            </a>
          </div>
        </div>
        <div className="row d-none d-md-block">
          <div className="col text-center">
            <h2>Own a hostel?</h2>
            <p className="lead">
              Our rewards program allows users to travel more and stay longer at
              your hostel.
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
      <Phone />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
