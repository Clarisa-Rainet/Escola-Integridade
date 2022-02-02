import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";
import logo from "../../assets/static/logo-bco.png"

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
      <ScrollableAnchor id={"artigos"}>
        <div className="fundo max-h-screen">
          <Fade right>
            <div className="justify-left ml-40">
              <img src={logo} className="w-2/5 pt-40" />
                <div className="flex font-medium family-light font-white">
                  <br />Integridade Corporativa: Pra minha empresa, 
                  <br />pra minha equipe e no meu papel como líder.
                  </div>
                </div>
              <div className="pt-4 pb-48">
                <a href="https://luiz-fernando-amaral-lucas.memberkit.com.br/invites/bZgkpG/join" target="_blank" className="transition duration-500 ease-in-out bg-red transform w-full p-2 mt-5 family-medium uppercase w-6 text-white justify-left ml-40"
                >acesse agora gratuitamente</a>
            </div>
             
               
          </Fade>
        </div>
      </ScrollableAnchor>
    );
  }










