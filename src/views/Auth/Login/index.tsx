import React, { useEffect } from "react";
import LogoImg from "../../../assets/svg/LogoImg";
import { generateLoginUrl } from "../../../helpers";

const LoginPage = () => {

  useEffect(() => {
    const baseUrl = generateLoginUrl();
    setTimeout(() => {
      window.location.replace(baseUrl);
    }, 2000);
  }, []);

  return <div className="flex flex-col justify-center items-center h-[70%] text-center font-bold">
    <div>
      <LogoImg />
    </div>
    We'll redirect you to Spotify Login Page, please wait...
  </div>;
};

export default LoginPage;
