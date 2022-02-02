import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";
import Contrate from "../contrate";

import seta from "../../assets/icons/seta.png";

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
    <ScrollableAnchor id={"home"}>
      <div className="flex topo w-full md:h-screen flex-wrap content-center  px-8 md:px-0">
        <Fade left>
          <div className="flex flex-col w-full md:w-1/2 items-start md:items-end md:mr-96 mt-40">
            {isMobile ? (
              <div className="text-4xl md:text-5xl mb-2">
                "Fazer o{" "}
                <strong>
                  CERTO
                  <br /> é o
                </strong>
                , único jeito
                <br />
                de dar <strong>CERTO."</strong>
              </div>
            ) : (
              <div className="text-5xl mb-2">
                "Fazer o <strong>CERTO é o</strong>,<br /> único jeito de dar{" "}
                <strong>CERTO."</strong>
              </div>
            )}
            <div className="mb-6">Luiz Fernando Lucas</div>
            <div className="">
              <Contrate text="CONTRATE AGORA" link="#contato" target="_self" />
            </div>
          </div>
        </Fade>
        <div className="w-full flex justify-center">
          <a href="#bio" className="seta">
            <img src={seta} className="w-12 h-12"></img>
          </a>
        </div>
      </div>
    </ScrollableAnchor>
  );
}
