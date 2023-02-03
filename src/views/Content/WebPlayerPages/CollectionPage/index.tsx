import CollectionFactory from 'components/WebPlayer/Collections/CollectionFactory';
import { useParams } from 'react-router-dom';

const CollectionPage = () => {
  const { collectionType } = useParams<{ collectionType: string | undefined }>();

  return (
    <div>
      <CollectionFactory type={collectionType} />
    </div>
  );
};

export default CollectionPage;
