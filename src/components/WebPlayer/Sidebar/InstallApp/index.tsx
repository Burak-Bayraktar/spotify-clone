import InstallAppSvg from 'assets/svg/InstallApp';
import './style.scss';

type InstallAppProps = {
  elementRef: React.RefObject<HTMLDivElement>;
};

const InstallApp = (props: InstallAppProps) => {
  return (
    <div ref={props.elementRef} className="install-app-container">
      <InstallAppSvg />
      Install App
    </div>
  );
};

export default InstallApp;
