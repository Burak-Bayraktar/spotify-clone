import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!value) return;

    const searchParams = new URLSearchParams();
    searchParams.set('key', value);

    navigate({ pathname, search: `${searchParams.toString()}` });
  }, [value]);

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(() => e.target.value)} />
    </div>
  );
};

export default SearchBar;
