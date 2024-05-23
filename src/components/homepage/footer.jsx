import React from 'react';

const FooterComponent = () => {
  return (
    <div
      className="h-20 w-full flex items-center justify-center mt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://thumbs.dreamstime.com/b/medical-logo-caduceus-72380945.jpg)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="text-white text-center z-10">
        <h4 className="text-sm">Developed by Jeremiah</h4>
        <p className="text-xs">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterComponent;
