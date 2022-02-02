import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import empresas from '../../assets/static/empresas.jpg'
import você from '../../assets/static/cursos.jpg'
import sociedade from '../../assets/static/sociedade.jpg'

export default function Page(props) {
  const btnScrollTop = useRef(null)
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true)
    } else {
      setShowBtn(false)
    }
  }

  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])

  return (
    <ScrollableAnchor id={'cursos'}>
      <div className="bg-black flex justify-center">
        <Fade>
          <div className="w-8/12 flex flex-row grid p-20">
            <div className="font-lg mb-8 uppercase">
              <strong>Cursos</strong> Online
            </div>

            <div className="flex justify-between w-full">
              <div className="text-left">
                Para Você
                <a
                  href="https://luiz-fernando-amaral-lucas.memberkit.com.br/invites/bZgkpG/join"
                  className="transition duration-500 ease-in-out transform w-full p-2 mt-5 family-medium uppercase w-6 text-white text-center"
                  target="_blank"
                >
                  <img src={você} alt="para Você" className="mt-2" />
                </a>
              </div>

              <div className="text-left">
                Para Empresas
                <img src={empresas} alt="para Empresas" className="mt-2" />
              </div>

              <div className="text-left">
                Para Sociedade
                <img src={sociedade} alt="para Sociedade" className="mt-2" />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
