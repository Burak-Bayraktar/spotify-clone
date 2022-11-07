import React, { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "services/User";
import { FetchStateType, UserContextType } from "contexts/types/UserContext";

const UserProps: UserContextType & FetchStateType = {
  country: "",
  display_name: "",
  id: "",
  images: [{ height: "", width: "", url: "" }],
  product: "",
  type: "",
  uri: "",
  loading: true,
  error: false,
};

const SpotifyUser = createContext<UserContextType & FetchStateType>(UserProps);

export const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [user, setUser] = useState<UserContextType>(UserProps);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      setLoading(false);
      return;
    };

    setLoading(true);
    const currentUser = getCurrentUser();
    Promise.resolve(currentUser)
      .then((result) => {
        setUser({
          country: result.country,
          display_name: result.display_name,
          id: result.id,
          images: result.images,
          product: result.product,
          type: result.type,
          uri: result.uri,
        });
      })
      .catch(() => setError(true))
      .finally(() => setTimeout(() => setLoading(false), 500));
  }, []);

  const values = {
    ...user,
    loading: loading,
    error: error,
  };

  return <SpotifyUser.Provider value={values}>{children}</SpotifyUser.Provider>;
};

export const useUser = () => useContext(SpotifyUser);
