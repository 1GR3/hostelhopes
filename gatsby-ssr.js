const React = require("react");
console.log("SSR loaded");
exports.onRenderBody = ({
  setHeadComponents,
  setPreBodyComponents,
  setBodyAttributes,
  setPostBodyComponents,
}) => {
  setHeadComponents([
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
  ]);
  setPreBodyComponents([
    <div id="preloader">
      {/* Optional: */}
      <img
        src="/images/loader.gif"
        alt="logo"
        style={{ height: "calc(3.23625vw + 77.86408px)" }}
      />
    </div>,
  ]);
  setBodyAttributes({
    className: "preloader_active",
  });
  setPostBodyComponents([<script src="/scripts/preloader.js" />]);
};
