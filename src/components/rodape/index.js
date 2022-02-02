import React, { useEffect, useState } from 'react'

import Contato from '../contato'

import redesSociais from '../../assets/static/redesSociais.png'
import instagram from '../../assets/icons/instagram.png'
import facebook from '../../assets/icons/facebook.png'
import youtube from '../../assets/icons/youtube.png'
import linkedin from '../../assets/icons/linkedin.png'
import spotify from '../../assets/icons/spotify.png'

import logo from '../../assets/icons/logo.png'

export default function Page(props) {
  const [loading, setLoading] = useState(false)
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])
  return (
    <div className="flex rodape bg-black w-full pt-12 flex-wrap content-center justify-center text-center flex-col">
      <div className="w-full flex flex-col items-center p-6 pb-0">
        <div className=" my-12">
          <img src={redesSociais} alt="redes sociais" />
        </div>
        <div className="w-full md:w-1/3 flex items-center md:justify-between">
          <a
            className="w-1/2 flex justify-center"
            href="https://www.instagram.com/luizfernandolucas/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="instagram" width="52" />
          </a>
          <a
            className="w-1/2 flex justify-center"
            href="https://www.youtube.com/c/LuizFernandoLucas"
            target="_blank"
            rel="noreferrer"
          >
            <img src={youtube} alt="youtube" width="52" />
          </a>
          <a
            className="w-1/2 flex justify-center"
            href="https://www.linkedin.com/in/fernandolucas/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" width="52" />
          </a>
          <a
            className="w-1/2 flex justify-center"
            href="https://www.facebook.com/LuizFernandoLUCAS"
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} alt="facebook" width="52" />
          </a>
          <a
            className="w-1/2 flex justify-center"
            href="https://open.spotify.com/show/7vy4aJkDgwGqyyOMecyAmr?si=glT3yR95Q4y7gT86VRnfyg"
            target="_blank"
            rel="noreferrer"
          >
            <img src={spotify} alt="spotify" width="52" />
          </a>
        </div>

        <div>
          <Contato />
        </div>
        <div className="flex justify-center mt-12">
          <img src={logo} alt="logo" width="256" />
        </div>

        <div className="text-xs my-16 pb-2">
          Copyright © 2021 – Luiz Fernando Lucas . Todos os direitos reservados
        </div>
      </div>
    </div>
  )
}
