import CollectionFactory from 'components/WebPlayer/Collections/CollectionFactory';
import useHistory from 'hooks/useHistory';
import { useParams } from 'react-router-dom';
import { UserLibraryFilters } from 'types/WebPlayer/UserLibrary/types';

const CollectionPage = () => {
  const { collectionType } = useParams<{ collectionType: keyof UserLibraryFilters }>();
  useHistory([collectionType]);

  return (
    <div>
      <CollectionFactory type={collectionType!} />
    </div>
  );
};

export default CollectionPage;
