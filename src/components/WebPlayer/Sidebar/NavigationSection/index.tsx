import CreatePlaylistSvg from 'assets/svg/Player_NavigationSection/CreatePlaylist/CreatePlaylist_Regular';
import HomeIconSvgRegular from 'assets/svg/Player_NavigationSection/HomeIcon/HomeIcon_Regular';
import HomeIconSvgActive from 'assets/svg/Player_NavigationSection/HomeIcon/HomeIcon_Active';
import LikedSongsSvg from 'assets/svg/Player_NavigationSection/LikedSongs/LikedSongs_Regular';
import SearchIconRegularSvg from 'assets/svg/Player_NavigationSection/SearchIcon/SearchIcon_Regular';
import SearchIconActiveSvg from 'assets/svg/Player_NavigationSection/SearchIcon/SearchIcon_Active';
import YourEpisodesSvg from 'assets/svg/Player_NavigationSection/YourEpisodes/YourEpisodes_Regular';
import YourLibraryIconSvg from 'assets/svg/Player_NavigationSection/YourLibraryIcon/YourLibraryIcon_Regular';
import './style.scss';
import { Link, useLocation } from 'react-router-dom';
import { RefObject, SVGProps, memo } from 'react';
import YourLibraryIconActive from 'assets/svg/Player_NavigationSection/YourLibraryIcon/YourLibraryIcon_Active';

type NavigationGroupContent = {
  regularIcon: React.ElementType<SVGProps<SVGSVGElement>>;
  activeIcon?: React.ElementType<SVGProps<SVGSVGElement>>;
  activeLink?: string;
  iconFill: string;
  iconBgColor: string;
  text: string;
  to?: string;
  onClick?: () => void;
};

type NavigationSectionProps = {
  navigationSectionRef: RefObject<HTMLDivElement>;
};

const NavigationSection = (props: NavigationSectionProps) => {
  const { pathname } = useLocation();

  const setNavigationGroup = (navigationGroup: NavigationGroupContent[]) => {
    return (
      <div className="navigation-group-container">
        {navigationGroup.map((item) => {
          return (
            <div key={item.text} className="navigation-group">
              {setNavigationGroupItem(item)}
            </div>
          );
        })}
      </div>
    );
  };

  const setNavigationGroupItem = (itemContent: NavigationGroupContent) => {
    const generateItemElement = () => {
      return (
        <>
          <div className="icon" style={{ background: itemContent.iconBgColor }}>
            {itemContent.activeLink === pathname && itemContent.activeIcon ? (
              <itemContent.activeIcon />
            ) : (
              <itemContent.regularIcon fill={itemContent.iconFill} />
            )}
          </div>
          <div className="text">{itemContent.text}</div>
        </>
      );
    };

    if (itemContent.to) {
      const isActive = itemContent.activeLink === pathname;
      return (
        <div className={`navigation-group__item ${isActive ? '--active' : ''}`}>
          <Link className="navigation-group__item__link" to={itemContent.to}>
            {generateItemElement()}
          </Link>
        </div>
      );
    }

    if (itemContent.onClick) {
      return (
        <div role="button" className="navigation-group__item" onClick={() => itemContent.onClick?.()}>
          {generateItemElement()}
        </div>
      );
    }
  };

  const createNewPlaylist = () => {
    // TODO: Create new playlist and redirect the user to its page
  };

  return (
    <div ref={props.navigationSectionRef} className="sidebar-navigation-section">
      {setNavigationGroup([
        {
          regularIcon: HomeIconSvgRegular,
          activeIcon: HomeIconSvgActive,
          activeLink: '/player',
          text: 'Home',
          iconFill: '#FFFFFF',
          iconBgColor: 'transparent',
          to: '.',
        },
        {
          regularIcon: SearchIconRegularSvg,
          activeIcon: SearchIconActiveSvg,
          activeLink: '/player/search',
          text: 'Search',
          iconFill: '#FFFFFF',
          iconBgColor: 'transparent',
          to: 'search',
        },
        {
          regularIcon: YourLibraryIconSvg,
          activeIcon: YourLibraryIconActive,
          activeLink: '/player/collection',
          iconFill: '#FFFFFF',
          iconBgColor: 'transparent',
          text: 'Your Library',
          to: 'collection',
        },
      ])}

      {setNavigationGroup([
        {
          regularIcon: CreatePlaylistSvg,
          iconFill: '#000000',
          iconBgColor: '#FFFFFF',
          text: 'Create Playlist',
          onClick: createNewPlaylist,
        },
        {
          regularIcon: LikedSongsSvg,
          iconFill: '#FFFFFF',
          iconBgColor: 'linear-gradient(135deg,#450af5,#c4efd9)',
          text: 'Liked Songs',
          to: 'collection/tracks',
        },
        {
          regularIcon: YourEpisodesSvg,
          iconFill: '#1ed760',
          iconBgColor: '#006450',
          text: 'Your Episodes',
          to: 'collection/episodes',
        },
      ])}
    </div>
  );
};

export default memo(NavigationSection);
