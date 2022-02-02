import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import logo from "../../assets/static/logo-rocketit-neg-rgb.png";
import { Fade } from "react-reveal";
import Contrate from "../contrate";

import titulo from "../../assets/static/titulo-bio.png";
import boticario from "../../assets/static/boticario.png";
import organon from "../../assets/static/organon.png";
import totvs from "../../assets/static/totvs.png";
import microsoft from "../../assets/static/microsoft.png";
import hp from "../../assets/static/hp.png";
import peoplesoft from "../../assets/static/PSoft.png";
import vivo from "../../assets/static/vivo.png";
import wolkswagen from "../../assets/static/wv.png";

import CardIcone from "../cardIcone";

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
    <ScrollableAnchor id={"bio"}>
      <div className="flex bio w-screen bg-black flex-wrap justify-end px-6 md:px-0 py-8 md:py-12">
        <Fade left>
          <div className="w-4/5 md:w-1/5 md:mt-24 mr-6 mb-4">
            <img src={titulo} />
          </div>
        </Fade>
        <Fade right>
          <div className="w-full md:w-1/2">
            <div className="w-full md:w-4/5 text-black mb-10">
              <span className="family-medium text-lg">LUIZ FERNANDO LUCAS</span>{" "}
              <br />
              <span className="text-sm">
                Palestrante, Escritor, Consultor, Advogado e Empreendedor.
                <br /> Filósofo em ação e sonhador lúcido, Luiz Fernando Lucas
                estuda há mais de 10 anos sobre a Integridade, também nos campos
                da Governança e Compliance. É ativista por convicção nas áreas
                da cidadania, sustentabilidade e expansão da consciência
                individual e pública.
                <br />
                <br />
                Casado e pai de três filhos, interessou-se pela Justiça ainda na
                juventude, o que culminou em sua formação em Direito, com MBA em
                Gestão e Marketing (FAAP) e extensão na Kogod Business School da
                American University, em Washington (EUA).
                <br />
                <br />
                Como consultor prestou serviços ao longo de sua carreira para
                importantes empresas, como a Farmacêutica Organon, O Boticário,
                Totvs, Merial, Microsoft, Peoplesoft, HP, Vivo, Volkswagen,
                Universidade Anhembi Morumbi, Bridgestone-Firestone, entre
                outras. Entre os principais cargos já ocupados estão o de
                Diretor da Consultoria Internacional Peppers and Rogers Group,
                Diretor Administrativo do Grupo Samel e CEO da Awake Health. Nas
                áreas institucionais e associativas, teve atuação em diversas
                entidades sociais, como Conselheiro da AACD, Instituto Ilumine e
                mais de 20 anos ocupando cargos voluntários dentro do sistema
                CIESP/FIESP.
                <br />
                <br />
                Seus mais de 20 anos de experiência o levaram a conhecer
                diferentes segmentos em profundidade, especialmente nas áreas de
                saúde, do varejo e da indústria.
              </span>
            </div>
            {/* <div className="family-bold text-black my-2">
              Clientes atendidos:
            </div>
            <div className="flex flex-wrap mb-4 md:w-4/5 justify-center">
              <div className="w-1/3 md:w-1/4 flex justify-center items-center mb-2">
                <img src={organon} className="w-24 h-12" />
              </div>
              <div className="w-1/3 md:w-1/4 flex justify-center items-center mb-2">
                <img src={boticario} className="w-28 h-10" />
              </div>
              <div className="w-1/3 md:w-1/4 flex justify-center items-center mb-2">
                <img src={totvs} className="w-24 h-auto" />
              </div>
              <div className="w-1/3 md:w-1/4 flex justify-center items-center mb-2">
                <img src={microsoft} className="w-28 h-6" />
              </div>
              <div className="w-1/3 md:w-1/4 flex justify-center items-center mb-2">
                <img src={hp} className="w-14 h-14" />
              </div>
              <div className="w-1/3 md:w-1/4 flex justify-center items-center mb-2">
                <img src={peoplesoft} className="w-28 h-18" />
              </div>
              <div className="w-1/3 md:w-1/4 flex justify-center items-center mb-2">
                <img src={vivo} className="w-20 h-8" />
              </div>
              <div className="w-1/3 md:w-1/4 flex justify-center items-center mb-2">
                <img src={wolkswagen} className="w-14 h-14" />
              </div>
            </div> */}
            <div classname="w-full">
              <div className="m-auto w-4/5 md:w-1/2">
                <Contrate
                  text="CONTRATE AGORA"
                  link="#contato"
                  target="_self"
                />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </ScrollableAnchor>
  );
}
