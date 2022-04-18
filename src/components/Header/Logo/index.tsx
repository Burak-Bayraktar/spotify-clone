import { Link } from "react-router-dom"
import LogoImg from "../../../assets/svg/LogoImg"

interface Props {
  setIsMenuOpen?: Function
}

const Logo = ({ setIsMenuOpen } : Props) => {
  return (
        <div className="header-logo">
          <span>
            <Link
             onClick={() => setIsMenuOpen && setIsMenuOpen(false)} 
             to={'/'}
            >
              <LogoImg />
            </Link>
          </span>
        </div>
  )
}

export default Logo