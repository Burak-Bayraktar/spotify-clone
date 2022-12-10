import CreatePlaylistSvg from 'assets/svg/CreatePlaylist';
import HomeIconSvg from 'assets/svg/HomeIcon';
import LikedSongsSvg from 'assets/svg/LikedSongs';
import SearchIconSvg from 'assets/svg/SearchIcon';
import YourEpisodesSvg from 'assets/svg/YourEpisodes';
import YourLibraryIconSvg from 'assets/svg/YourLibraryIcon';
import './style.scss';
import { Link } from 'react-router-dom';

type NavigationGroupContent = {
  icon: React.ComponentType;
  iconBgColor?: string;
  text: string;
  to?: string;
  onClick?: () => void;
};

const NavigationSection = () => {
  const setNavigationGroup = (navigationGroup: NavigationGroupContent[]) => {
    return (
      <div className="navigation-group-container">
        {navigationGroup.map((item) => {
          return <div className="navigation-group">{setNavigationGroupItem(item)}</div>;
        })}
      </div>
    );
  };

  const setNavigationGroupItem = (itemContent: NavigationGroupContent) => {
    const generateItemElement = () => {
      return (
        <>
          <div className="icon">
            <itemContent.icon />
          </div>
          <div className="text">{itemContent.text}</div>
        </>
      );
    };

    if (itemContent.to) {
      return (
        <div className="navigation-group__item">
          <Link className="navigation-group__item__link" to={itemContent.to}>
            {generateItemElement()}
          </Link>
        </div>
      );
    }

    if (itemContent.onClick) {
      return (
        <button className="navigation-group__item" onClick={() => itemContent.onClick?.()}>
          {generateItemElement()}
        </button>
      );
    }
  };

  const createNewPlaylist = () => {
    // TODO: Create new playlist and redirect the user to its page
  };

  return (
    <div className="sidebar-navigation-section">
      {setNavigationGroup([
        { icon: HomeIconSvg, text: 'Home', to: '.' },
        { icon: SearchIconSvg, text: 'Search', to: 'search' },
        { icon: YourLibraryIconSvg, text: 'Your Library', to: 'collection' },
      ])}
      <span className="--divider" />
      {setNavigationGroup([
        { icon: CreatePlaylistSvg, iconBgColor: '', text: 'Create Playlist', onClick: createNewPlaylist },
        { icon: LikedSongsSvg, iconBgColor: '', text: 'Liked Songs', to: 'collection/tracks' },
        { icon: YourEpisodesSvg, iconBgColor: '', text: 'Your Episodes', to: 'collection/episodes' },
      ])}
    </div>
  );
};

export default NavigationSection;
