import * as React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import Header from "../components/header";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>404 | Hostel Hop</title>
        <meta name="description" content="hostelhop " />
      </Helmet>
      <main className=" text-center bg-hero">
        <section className="container dark">
          <Header />
          <div className="d-flex align-items-center justify-content-center py-5">
            <div className="d-block">
              <p className="lead">The quote of the day No. 404:</p>
              <h1>Not All Those Who Wander Are Lost</h1>
              <p className="lead">
                ...but you are...
                <br />
                <br />
                <Link to="/" className="btn btn-light">
                  Go home
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
