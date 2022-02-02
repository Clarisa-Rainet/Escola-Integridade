import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import logo from "../../assets/static/logo-rocketit-neg-rgb.png";
import { Fade } from "react-reveal";
import Contrate from "../contrate";

import titulo from "../../assets/static/titulo-era.png";
import publico from "../../assets/icons/publico.png";

export default function Page(props) {
  const [isMobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth >= 992) {
      setMobile(false);
    } else {
      setMobile(true);
    }
  }, [window.innerWidth]);
  return (
    <ScrollableAnchor id={"era"}>
      <div className="flex era w-full bg-black md:h-screen flex-wrap content-center justify-center items-center p-10 md:pb-6">
        <Fade>
          <div className="w-full md:w-1/3 ">
            <div className="w-full text-2xl md:text-4xl">Palestra</div>
            <img
              src={titulo}
              alt="A era da integridade"
              className="w-full md:w-4/5"
            />

            <div className="mt-4">
              E o homo Conscious - a evolução baseada em propósito,
              sustentabilidade e consciência
            </div>
            {isMobile ? (
              ""
            ) : (
              <>
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/586907187?h=33ebbe2603"
                  className="mt-4 mx-auto"
                  width="380"
                  height="210"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <div className="w-full md:w-4/5 mt-12 flex justify-center mx-auto">
                  <Contrate
                    text="CONTRATE AGORA"
                    link="#contato"
                    target="_self"
                  />
                </div>
              </>
            )}
          </div>
        </Fade>
        <Fade right>
          <div className="w-full md:w-1/3 flex items-center flex-col">
            <div>
              A Cultura de Valores e os conceitos filosóficos, jurídicos e de
              negócios que estão transformando o mercado de investimento e as
              empresas do mundo para um capitalismo mais consciente, inclusivo e
              de propósito apresentados de maneira didática e impactante tanto
              do ponto de vista racional quanto emocional proporcionam
              transformação e engajamento do público.
            </div>
            <div className="flex mt-4 items-center">
              <img
                src={publico}
                alt="icone publico"
                className="w-16 md:w-auto h-10 md:h-auto"
              />
              <div className="ml-6 md:ml-2">
                <strong>Público:</strong>
                <br />
                Líderança, equipe em Geral, clientes e Evento multi-tema
              </div>
            </div>
            {isMobile ? (
              <>
                <iframe
                  title="vimeo-player"
                  src="https://player.vimeo.com/video/586907187?h=33ebbe2603"
                  className="mt-4"
                  width="360"
                  height="160"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
                <div className="w-full md:w-4/5 mt-4 flex justify-center">
                  <Contrate
                    text="CONTRATE AGORA"
                    link="#contato"
                    target="_self"
                  />
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  );
}
