import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import imgSomos from '../../assets/static/quemSomos.png'

export default function Page(props) {
  const [isMobile, setMobile] = useState(false)
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false)
    } else {
      setMobile(true)
    }
  }, [window.innerWidth])
  return (
    <ScrollableAnchor id={'quem-somos'}>
      <div className="plano flex">
        <Fade right>
          <div className="w-6/12 flex items-center justify-center">
            <div>
              <img src={imgSomos} width="640" height="640" />
            </div>
          </div>
          <div className="w-6/12 p-32">
            <div className="text-3xl family-light font-black mb-12">
              <strong>QUEM</strong> SOMOS
            </div>
            <div className="family-light font-black">
              Somos uma <strong>Ed.Tech</strong>, uma startup de educação, mas
              já da Era da Integridade, então temos com bases dte sustentação os
              valores absolutos e como propósito contribuir com a evolução do
              planeta e da humanidade.
              <br />
              <br />
              Entendemos que levar filosofia de ação e conceitos sobre a Cultura
              de valores e Integridade são os pilares elevar a consciência e
              transformar mentes e corações para uma liderança e vida como se
              estivesse servindo a uma nobre missão.
              <br />
              <br />
              Somos compostos por duas organizações independentes. Uma empresa
              privada e um Instituto parceiro que tanto se beneficia dos
              resultados da Escola quanto com essa contribui com ações e
              conteúdos e a missão de despertar a consciência coletiva de
              cidadania com ética, integridade na área pública e política e
              levar os conceitos e conteúdos para as áreas menos favorecidas e
              vulneráveis da sociedade.
              <br />
              <br />
              Temos nosso modelo de negócios baseado em patrocínios para poder
              levar conteúdo gratuito, doações para o instituto para cumprir sua
              missão e também receita de produtos de treinamento e conteúdo
              personalizados para empresas e organizações.
              <br />
              <br />
              Para mais informações, contato institucional, patrocínio e
              propostas personalizadas entre em contato com nosso time através
              do contato@escoladaintegridade.com.br
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
