import React, { useEffect, useState } from "react";

interface UserCredentialsProps  {
    accessToken:string,
    tokenType:string,
    expiresIn:string
}

const RedirectPage = () => {
  const [userCredentials, setUserCredentials] = useState<UserCredentialsProps>({ accessToken: '', tokenType: '', expiresIn: ''});
  
  useEffect(() => {
    const url = window.location.href;
    const urlParams = new URLSearchParams(url.split("#")[1]);
    const [accessToken, tokenType, expires_in] = [
      urlParams.get("access_token"),
      urlParams.get("token_type"),
      urlParams.get("expires_in"),
    ];

    localStorage.setItem('access-token', accessToken!)
    localStorage.setItem('token-type', tokenType!)
    localStorage.setItem('expires-in', expires_in!)

    if (accessToken && tokenType && expires_in) {
      setUserCredentials({accessToken, tokenType, expiresIn: expires_in})
      setTimeout(() => {
        window.location.replace('/')
      }, 2000)
    }
  }, [])

  return (
    <div className="flex flex-col items-center text-center">
      <div className="text-lg font-bold">YOU'RE REDIRECTING</div>
      <div>Access Token: {userCredentials.accessToken}</div>
      <div>Your Token Type: {userCredentials.tokenType}</div>
      <div>You will be expired in: {userCredentials.expiresIn}</div>
    </div>
  );
};

export default RedirectPage;
