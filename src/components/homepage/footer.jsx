import React from 'react';

const FooterComponent = () => {
  return (
    <div
      className="h-20 w-full flex items-center justify-center mt-20"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://cdn.shopify.com/s/files/1/0008/9430/4309/files/African-Print-Fabric_480x480.jpg?v=1609954811)",
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
