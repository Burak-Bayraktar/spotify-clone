import React, { useEffect, useState } from 'react';
import { getAccessToken } from 'helpers';

const RedirectPage = () => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    const url = window.location.href;
    const urlParams = new URLSearchParams(url.split('?')[1]);
    const code = urlParams.get('code');
    localStorage.setItem('code', code!);

    const result = getAccessToken(code!);
    Promise.resolve(result)
      .then((resAT) => {
        localStorage.setItem('access-token', resAT.data['access-token']);
        localStorage.setItem('refresh-token', resAT.data['refresh-token']);
        setTimeout(() => {
          window.location.replace('/');
        }, 2000);
      })
      .catch(() => {
        setHasError(true);
      });
  }, []);

  return (
    <div className="flex flex-col items-center text-center mt-10">
      {hasError ? (
        <div className="text-lg font-bold">
          An error occurred <br />
          PLEASE TRY AGAIN
        </div>
      ) : (
        <div className="text-lg font-bold">YOU'RE REDIRECTING</div>
      )}
    </div>
  );
};

export default RedirectPage;
