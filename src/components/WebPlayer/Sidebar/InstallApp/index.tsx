import InstallAppSvg from 'assets/svg/InstallApp';
import { memo } from 'react';
import './style.scss';

type InstallAppProps = {
  elementRef: React.RefObject<HTMLDivElement>;
};

const InstallApp = (props: InstallAppProps) => (
  <div ref={props.elementRef} className="install-app-container">
    <div className="install-app-svg">
      <InstallAppSvg />
    </div>
    <div className="install-app-text">Install App</div>
  </div>
);

export default memo(InstallApp);
