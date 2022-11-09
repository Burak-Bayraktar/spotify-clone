import { MenuMiniArrow } from 'assets/svg/MenuMiniArrow';
import { useUser } from 'contexts/UserContext';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function UserMiniIndicator() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { images } = useUser();
  const [userImage] = images;

  return (
    <div className="user-container">
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="user-container-content">
        <img src={userImage.url} alt="user-image" />
        <div className="list-item-link">Profil</div>
        <MenuMiniArrow style={{ transform: isDropdownOpen ? 'scale(-1)' : 'scale(1)' }} />
      </div>

      <div className={`user-profile-dropdown ${isDropdownOpen ? '' : 'hidden'}`}>
        <ul>
          <li>
            <a className="dropdown-link" href="/profile" target="_blank">
              Hesap
            </a>
          </li>
          <li>
            <Link className="dropdown-link" to="?logout=true">
              Oturumu Kapat
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserMiniIndicator;
