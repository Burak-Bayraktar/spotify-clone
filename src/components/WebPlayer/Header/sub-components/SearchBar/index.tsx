import SearchIconSvg from 'assets/svg/Player_NavigationSection/SearchIcon/SearchIcon_Regular';
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import './style.scss';

const SearchBar = () => {
  const { pathname, search } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams(search);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchParams.get('key')) {
      console.log('TODO: send api request there');
    }
  }, [searchParams.get('key')]);

  const handleChange = (value: string) => {
    if (!value) {
      searchParams.delete('key');
      return navigate({ pathname, search: `${searchParams.toString()}` });
    }
    searchParams.set('key', value);
    navigate({ pathname, search: `${searchParams.toString()}` });
  };

  return (
    <div className="search-bar">
      <input
        ref={inputRef!}
        className="search-bar-input"
        type="text"
        placeholder="What do you want to listen to?"
        value={searchParams.get('key') || ''}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="input-icons">
        <SearchIconSvg fill="black" />
      </div>
    </div>
  );
};

export default SearchBar;
