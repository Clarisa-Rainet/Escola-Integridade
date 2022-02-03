import React, { useEffect, useState } from 'react'

import { Content } from './style'
// import Menu from '@mui/icons-material/Menu';
import * as Icon from 'react-bootstrap-icons'
import logo from '../../assets/icons/LOGO-branco.png'
import instagram from '../../assets/icons/instagram.png'
import youtube from '../../assets/icons/youtube.png'
import facebook from '../../assets/icons/facebook.png'
import linkedin from '../../assets/icons/linkedin.png'
import spotify from '../../assets/icons/spotify.png'

let limit_scroll = 300
let limit_scroll_header = 250

const MenuSite = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [isMobile, setMobile] = useState(false)
  const [active, setActive] = useState('#')
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setShowMenu(true)
      setMobile(false)
    } else {
      setMobile(true)
      limit_scroll = 50
    }
  }, [window.innerWidth])

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll)
    return () => {
      window.removeEventListener('scroll', listenToScroll)
    }
  }, [])

  function listenToScroll() {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
    setScroll(winScroll)
  }

  const updateMenu = () => {
    const { innerWidth: width } = window
    if (width >= 992) {
      setShowMenu(true)
    } else {
      setShowMenu(!showMenu)
    }
  }

  const clickMenu = (link) => {
    setActive(link)
    if (isMobile) {
      setShowMenu(false)
    }
  }

  return (
    <Content
      className={`navbar flex flex-col justify-center items-center fixed-top  ${
        scroll > limit_scroll ? 'bg-active bg-black' : ''
      }`}
    >
      <div className=" px-3 md:px-24 flex w-screen justify-around flex-col md:flex-row">
        <div
          className={`menu-logo w-full flex lg:w-3/12 ${
            scroll > limit_scroll ? 'menu-scroll' : 'menu-top'
          }`}
        >
          <a
            href="#home"
            onClick={() => clickMenu('home')}
            aria-label="Product"
            className="w-1/2 m-auto md:m-0 md:w-full"
          >
            <img
              src={logo}
              alt="Luiz Fernando Lucas"
              className={scroll > limit_scroll ? 'scroll' : ''}
              id="logo"
            />
          </a>
          <div className="block lg:hidden">
            <button
              type="button"
              className="menu-mobile"
              onClick={() => updateMenu()}
            >
              {!showMenu ? (
                <Icon.List size={32} color={'#fff'} />
              ) : (
                <Icon.X size={32} color={'#fff'} />
              )}
            </button>
          </div>
        </div>
        <div
          className={`w-full lg:w-2/3 xl:w-2/3 lg:ml-40 justify-around menu-nav ${
            showMenu ? 'show-menu' : 'hide-menu'
          }`}
        >
          <a
            onClick={() => clickMenu('quem-somos')}
            className="link"
            href="#quem-somos"
          >
            Quem Somos
          </a>
          <a
            onClick={() => clickMenu('cursos')}
            className="link"
            href="#cursos"
          >
            Para Empresas
          </a>
          <a
            onClick={() => clickMenu('cursos')}
            className="link"
            href="#cursos"
          >
            Para você
          </a>
          <a
            onClick={() => clickMenu('cursos')}
            className="link"
            href="#cursos"
          >
            Para Sociedade
          </a>

          <div className="flex">
            <a
              href="https://instagram.com/escoladaintegridade"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} className="w-6 mr-4" />
            </a>
            <a
              href="https://www.youtube.com/c/LuizFernandoLucas"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtube} className="w-5 mr-4" />
            </a>
            <a
              href="https://www.linkedin.com/company/escoladaintegridade"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} className="w-6 mr-4" />
            </a>
            <a
              href="https://www.facebook.com/LuizFernandoLUCAS"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook" className="w-6 mr-4" />
            </a>
            <a
              href="https://open.spotify.com/show/7vy4aJkDgwGqyyOMecyAmr?si=glT3yR95Q4y7gT86VRnfyg"
              target="_blank"
              rel="noreferrer"
            >
              <img src={spotify} alt="spotify" className="w-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-screen toldo -mt-1"></div>
    </Content>
  )
}

export default MenuSite
