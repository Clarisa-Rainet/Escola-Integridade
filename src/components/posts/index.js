import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";
import logo from "../../assets/static/logo-bco.png"

export default function Page(props) {
  const btnScrollTop = useRef(null);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (event) => {
    if (window.pageYOffset >= 700 && !showBtn) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  };
    const [isMobile, setMobile] = useState(false);
    useEffect(() => {
      if (window.innerWidth >= 992) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    }, [window.innerWidth]);
    return (
      <ScrollableAnchor id={"artigos"}>
        <div className="fundo max-h-full md:max-h-screen">
          <Fade right>
            <div className="justify-center md:justify-left ml-10 md:ml-40">
              <img src={logo} className="w-2/5 pt-40" />
                <div className="flex font-medium family-light font-white">
                  <br />Integridade Corporativa: Pra minha empresa, 
                  <br />pra minha equipe e no meu papel como líder.
                  </div>
                </div>
              <div className="pt-2 md:pt-4 pb-12 md:pb-48">
                <a href="https://luiz-fernando-amaral-lucas.memberkit.com.br/invites/bZgkpG/join" target="_blank" className="transition duration-500 ease-in-out bg-red transform w-auto md:w-full p-2 mt-5 font-small md:font-medium family-medium uppercase w-6 text-white justify-center md:justify-left ml-10 md:ml-40"
                >acesse agora gratuitamente</a>
            </div>
             
               
          </Fade>
        </div>
      </ScrollableAnchor>
    );
  }










