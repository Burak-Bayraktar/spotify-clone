import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/User";
import { UserContextType } from "./types/UserContext";

const UserProps: UserContextType = {
  country: "",
  display_name: "",
  id: "",
  images: [{ height: "", width: "", url: "" }],
  product: "",
  type: "",
  uri: "",
};

const SpotifyUser = createContext<UserContextType>(UserProps);

export const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = useState<UserContextType>(UserProps);

  useEffect(() => {
    const currentUser = getCurrentUser();
    Promise.resolve(currentUser).then((result) => {
      setUser({
        country: result.country,
        display_name: result.display_name,
        id: result.id,
        images: result.images,
        product: result.product,
        type: result.type,
        uri: result.uri,
      });
    });
  }, []);

  const values = {
    ...user,
  };

  return <SpotifyUser.Provider value={values}>{children}</SpotifyUser.Provider>;
};

export const useUser = () => useContext(SpotifyUser);
