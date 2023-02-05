import CollectionFactory from 'components/WebPlayer/Collections/CollectionFactory';
import { useHistory } from 'contexts/HistoryContext';
import { useParams } from 'react-router-dom';

const CollectionPage = () => {
  const { collectionType } = useParams<{ collectionType: string | undefined }>();
  useHistory([collectionType]);

  return (
    <div>
      <CollectionFactory type={collectionType} />
    </div>
  );
};

export default CollectionPage;
