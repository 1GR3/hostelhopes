import * as React from "react";

const AppRedirect = () => {
  React.useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
      // Redirect to Google Play
      window.location.href =
        "https://play.google.com/store/apps/details?id=your-android-app-id";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to App Store
      window.location.href = "https://itunes.apple.com/app/your-ios-app-id";
    }
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      Redirecting...
    </div>
  );
};

export default AppRedirect;
