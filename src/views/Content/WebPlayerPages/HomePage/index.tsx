import { HomeViewContext, ItemType } from 'contexts/HomeViewContext';
import { HomeViewTypeMap } from 'contexts/types/HomeViewContext';
import useHistory from 'hooks/useHistory';
import { useContext } from 'react';

const PlayerHomePage = () => {
  useHistory();
  const { state } = useContext(HomeViewContext)!;
  function renderHomeView(view: ItemType) {
    let data;
    switch (view.type) {
      case 'user_albums':
        data = view.data as HomeViewTypeMap['user_albums'];
        return <div>Albums</div>;
      case 'user_followed_artists':
        data = view.data as HomeViewTypeMap['user_followed_artists'];
        return <div>Artists</div>
      case 'user_top_items':
        data = view.data as HomeViewTypeMap['user_top_items'];
        return <div>Top Items</div>
      case 'user_saved_tracks':
        data = view.data as HomeViewTypeMap['user_saved_tracks'];
        return <div>Saved Tracks</div>
      case 'user_playlists':
        data = view.data as HomeViewTypeMap['user_playlists'];
        return <div>Playlists</div>
      default:
        return <div>Unknown</div>
    }
  }

  return <section className='home-section-container'>
      {state.items.map((item, index) => {
        return <article key={index} className='home-section'>
          {renderHomeView(item)}
        </article>;
      })}
  </section>
};

export default PlayerHomePage;
