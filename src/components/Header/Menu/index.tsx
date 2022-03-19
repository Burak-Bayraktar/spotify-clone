import MenuList from './components/MenuList'

const Menu = () => {
  return (
    <nav className='header-menu-container'>
      <div className="header-menu">
          <MenuList />
      </div>
      <div className="header-mobile-menu">
        MOBILE
      </div>
    </nav>
  )
}

export default Menu