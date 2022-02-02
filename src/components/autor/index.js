import React, { useEffect, useRef, useState } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { Fade } from 'react-reveal'

import btnSaiba from '../../assets/static/btn-saiba-mais.png'
import btnFalar from '../../assets/static/btn-falar-agora.png'

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
    <ScrollableAnchor id={''}>
      <div className="autor bg-auto bg-no-repeat bg-center flex">
        <Fade right>
          <div className="w-6/12"></div>
          <div className="w-6/12 p-32">
            <div className="text-3xl family-light font-black mb-12">
              <strong>MENTORIA</strong> O Caminho da Integridade
            </div>
            <div className="family-light font-black">
              Por <strong>Luiz Fernando Lucas</strong> <br />
              A Mentoria em grupo tem duração mínima de 6 meses e acontece em
              encontros virtuais quinzenais.
              <br />
              <br />
              Além disso, há um primeiro encontro virtual individual para início
              e mais 2 encontros individuais ao longo do ciclo, para devolutivas
              e questões particulares, com datas a definir. Inclui também uma
              vaga para participação em Encontro Presencial, uma imersão de 3
              dias realizado na Grande SP ou arredores, possivelmente em Cotia,
              SP) *(custo de estadia e alimentação não incluído, é opcional a
              participação).
              <br />
              <br />
              Se tiver interesse, nosso time de assessoria vai lhe mandar
              informações de conteúdo, Investimento e próximas turmas.
              <br />
              <br />
              Opção de Mentoria INDIVIDUAL exclusiva sob consulta de
              disponibilidade (Poucos horários disponibilizados)
              <br />
              <br />
              Opção de organização de Mentoria Grupos Corporativos para times e
              líderes de empresas, com conteúdo e formato exclusivo e
              personalizado.
              <br />
              <br />
              Entre em contato pelo whatsapp para lista de espera da Mentoria Em
              Grupo ou consultar opções INDIVUDUAL ou Grupos CORPORATIVOS
            </div>

            <div className="flex mt-8">
              <a href="https://fernandolucas.com.br/site/" target="_blank">
                <img src={btnSaiba} height="46" />
              </a>
              <a href="#contato" className="ml-4">
                <img src={btnFalar} height="46" />
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  )
}
