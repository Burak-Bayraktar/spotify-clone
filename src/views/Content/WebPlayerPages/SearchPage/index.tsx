import useHistory from 'hooks/useHistory';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const searchKey = searchParams.get('key');

  useHistory([search], true);

  return <div>Search Key: {searchKey}</div>;
};

export default SearchPage;
