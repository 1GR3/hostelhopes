import React from "react";

const ConnectForm = ({ hostel }) => {
  const difference = hostel ? (
    // Content for hostel
    <div className="row">
      <div className="col-12 mb-3">
        <input
          type="text"
          className="form-control"
          id="hostelName"
          aria-describedby="hostelName"
          placeholder="Hostel Name"
        />
      </div>
    </div>
  ) : (
    // Content for influencer
    <div className="row">
      <div className="col-12 col-md-6 mb-3">
        <select
          className="form-select"
          aria-label="Select social network"
          required
        >
          <option value="" disabled selected>
            I’m most well known on...
          </option>
          <option value="facebook">Facebook</option>
          <option value="youtube">YouTube</option>
          <option value="instagram">Instagram</option>
          <option value="tiktok">TikTok</option>
          <option value="snapchat">Snapchat</option>
          <option value="pinterest">Pinterest</option>
          <option value="reddit">Reddit</option>
          <option value="twitter">Twitter</option>
        </select>
      </div>
      <div className="col-12 col-md-6 mb-3">
        <input
          type="text"
          className="form-control"
          id="handle"
          aria-describedby="emailHelp"
          placeholder="@handle"
        />
      </div>
    </div>
  );

  return (
    <form className="contact">
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            id="firstName"
            aria-describedby="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            id="lastName"
            aria-describedby="emailHelp"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email"
          />
        </div>
        <div className="col-12 col-md-6 mb-3">
          <input
            type="phone"
            className="form-control"
            id="phone"
            aria-describedby="emailHelp"
            placeholder="Phone"
          />
        </div>
      </div>
      {difference}
      <div className="row">
        <div className="col mb-3">
          <textarea
            className="form-control"
            id="message"
            placeholder="Message"
            rows="6"
          />
        </div>
      </div>
      <div className="row">
        <div className="d-grid col-12 col-md-6 mb-3 ms-auto">
          <button
            type="submit"
            className={"btn btn-" + (hostel ? "danger" : "success")}
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ConnectForm;
