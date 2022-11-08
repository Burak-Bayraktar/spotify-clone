import { useEffect, useState } from "react";

export function useUserOs() {
  const [userOs, setUserOs] = useState('');

  useEffect(() => {
    const { userAgent } = window.navigator;
    const os = ['Windows', 'iPhone', 'Android'];
    const userOS = os.find((item) => {
      if (userAgent.search(item) !== -1) {
        return item;
      }
    })!;

    setUserOs(userOS);
  }, []);


  return { userOs, appLink: '' };
}