import { LogoIcon } from 'Icons'

function Header() {
  return (
    <header className='header'>
      <LogoIcon className='header__logo' />
      <nav className='header__nav'>
        <a href='#' className='header__nav__anchor'>Home</a>
        <a href='#' className='header__nav__anchor'>About</a>
        <a href='#' className='header__nav__anchor'>Contact</a>
        <a href='#' className='header__nav__anchor'>Blog</a>
        <a href='#' className='header__nav__anchor'>Careers</a>
      </nav>
      <button className='button'>Request Invite</button>
    </header>
  )
}

export default Header
