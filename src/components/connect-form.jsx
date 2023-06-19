import React from "react";

const ConnectForm = ({ hostel }) => {
  const content = hostel ? (
    // Content for hostel
    <div>Hostel-specific content</div>
  ) : (
    // Content for influencer
    <div>Influencer-specific content</div>
  );

  return <div>This is a {content}</div>;
};

export default ConnectForm;
