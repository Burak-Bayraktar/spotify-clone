import { Facebook } from "assets/svg/Social Logos/Facebook";
import { Instagram } from "assets/svg/Social Logos/Instagram";
import { Twitter } from "assets/svg/Social Logos/Twitter";

type Props = {};

const SocialMediaSection = (props: Props) => {
  return (
    <div className="footer-social">
      <span className="icon">
        <Instagram width="1.5rem" height="1.5rem" />
      </span>
      <span className="icon">
        <Twitter width="1.5rem" height="1.5rem" />
      </span>
      <span className="icon">
        <Facebook width="1.5rem" height="1.5rem" />
      </span>
    </div>
  );
};

export default SocialMediaSection
