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
          Just focus on the good bits of
          <br /> your next adventure.
        </h1>
        <button className="btn btn-light">
          Own a hostel? We can help you grow.
        </button>
      </section>
      <section className="container">
        <div className="row">
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
        <div className="row">
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
            <button className="btn btn-success">
              Make passive income sharing your travels
            </button>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col text-center">
            <h2>Own a hostel?</h2>
            <p className="lead">
              Our rewards program allows users to  travel more and stay longer
              at your hostel.
            </p>
          </div>
          <div className="col"></div>
          <div className="col text-center">
            <h2>Get listed.</h2>
            <p className="lead">
              Hostel hop takes a lower deposit fee than hostel world and
              booking.com
            </p>
            <button className="btn btn-danger">
              Own a hostel? We can help you grow!
            </button>
          </div>
        </div>
      </section>
      <Phone />
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
