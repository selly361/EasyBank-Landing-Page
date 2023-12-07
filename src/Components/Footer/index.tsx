import { FacebookIcon, InstagramIcon, LightLogoIcon, PinterestIcon, TwitterIcon, YoutubeIcon } from 'Icons'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__container">
      <nav className='footer__container__social-nav'>
        <LightLogoIcon />
        <div className='footer__container__social-nav__container'>
          <FacebookIcon />
          <YoutubeIcon />
          <TwitterIcon />
          <PinterestIcon />
          <InstagramIcon />
        </div>
      </nav>

      <nav className='footer__container__nav-links'>
        <a href='#' className='footer__container__nav-links_anchor'>About Us</a>
        <a href='#' className='footer__container__nav-links_anchor'>Contact</a>
        <a href='#' className='footer__container__nav-links_anchor'>Blog</a>
        <a href='#' className='footer__container__nav-links_anchor'>Careers</a>
        <a href='#' className='footer__container__nav-links_anchor'>Support</a>
        <a href='#' className='footer__container__nav-links_anchor'>Privacy Policy</a>
      </nav>
      </div>

      <div className='footer__copyright-container'>
        <button className='button--primary'>Request Invite</button>
        <p className="footer__copyright-container_text">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
