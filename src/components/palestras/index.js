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
      <div className="bg-black flex justify-around md:justify-center">
        <Fade>
          <div className="w-full md:w-8/12 flex flex-col md:flex-row grid md:px-10 py-10 lg:py-16 2xl:py-24 lg:px-20 2xl:px-52">
          <div className="mx-4 md:mx-0 mb-8 md:mb-16 max-w-fit md:max-w-auto mt-2 px-6">
            <div className="font-lg mb-8 uppercase text-2xl 2xl:text-3xl pl-10 md:pl-0">
              <strong>Cursos</strong> Online
            </div>

            <div className="flex-grid sm:flex justify-center md:justify-between w-full space-x-9	md:space-x-auto">
              <div className="text-left pt-6 md:pt-0 pl-10 md:pl-0">
                Para Você
                <a
                  href="https://luiz-fernando-amaral-lucas.memberkit.com.br/invites/bZgkpG/join"
                  target="_blank"
                >
                  <img src={você} alt="para Você" className="max-w-fit md:max-w-auto mt-2" />
                </a>
              </div>

              <div className="text-left pt-6 md:pt-0">
                Para Empresas
                <img src={empresas} alt="para Empresas" className="mt-2" />
              </div>

              <div className="text-left pt-6 md:pt-0">
                Para Sociedade
                <img src={sociedade} alt="para Sociedade" className="mt-2" />
              </div>
            </div>
            
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
