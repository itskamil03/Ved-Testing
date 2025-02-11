import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Cookies.css";

const CookieManager = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    
    if (!Cookies.get("myCookie")) {
      setShowPopup(true); 
    }
  }, []);

  const setCookie = () => {
    Cookies.set("myCookie", "Hello, World!"); 
    setShowPopup(false); 
  };

  return (
    <div>
      {showPopup && (
        <div className={`cookie-popup show`}>
          <div>
            <p className="cookies_accept">Accept This Cookies For Best Experience</p>
            <p>
              At Venturing Digitally, we use cookies to enhance your browsing
              experience, analyze site traffic, and understand where our
              visitors are coming from. By accepting, you consent to our use of
              cookies.
            </p>
          </div>
          <button onClick={setCookie}>Accept</button>
        </div>
      )}
    </div>
  );
};

export default CookieManager;

