import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const searchKey = searchParams.get('key');

  return <div>Search Key: {searchKey}</div>;
};

export default SearchPage;
