import InstallAppSvg from 'assets/svg/InstallApp';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

type InstallAppProps = {
  elementRef: React.RefObject<HTMLDivElement>;
};

const InstallApp = (props: InstallAppProps) => (
  <div ref={props.elementRef} className="install-app-container">
    <Link to="/download">
      <div className="install-app-svg">
        <InstallAppSvg />
      </div>
      <div className="install-app-text">Install App</div>
    </Link>
  </div>
);

export default memo(InstallApp);
