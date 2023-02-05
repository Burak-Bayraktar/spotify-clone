import { useHistory } from 'contexts/HistoryContext';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const { search } = useLocation();

  const searchParams = new URLSearchParams(search);
  const searchKey = searchParams.get('key');

  useHistory([search]);

  return <div>Search Key: {searchKey}</div>;
};

export default SearchPage;
