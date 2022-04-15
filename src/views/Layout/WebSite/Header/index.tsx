import { FC } from "react";
import Logo from '../../../../components/Header/Logo'
import Menu from "../../../../components/Header/Menu";
import './style.scss'

const Header : FC = () => {
    return (
        <>
            <div className="header-container">
                <Logo />
                <Menu />
            </div>
        </>    

    )
}

export default Header;