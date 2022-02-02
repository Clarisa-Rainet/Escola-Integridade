import React, { useEffect, useRef, useState } from "react";
import ScrollableAnchor from "react-scrollable-anchor";

import { Fade } from "react-reveal";


  import estadao from "../../assets/file/estadao.jpg";
  import borboletas from "../../assets/file/borboletas.jpg";
  import maos from "../../assets/file/maos.jpg";
  import especie from "../../assets/file/especie.jpg";
  import incorruptibilidade from "../../assets/file/incorruptibilidade.jpg";
  import paraiso from "../../assets/file/paraiso.jpg";
  import almazonia from "../../assets/file/almazonia.jpg"; 
  import gaia from "../../assets/file/gaia.jpg";
  import triste from "../../assets/file/triste.jpg";
  import erasmo from "../../assets/file/erasmo.jpg";
  import lagrima from "../../assets/file/lagrima.jpg";
  import poema from "../../assets/file/poema.jpg";
  import transformando from "../../assets/file/transformando.jpg";






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
      <ScrollableAnchor id="posts">
        <div className="flex px-6 py-10 items-center font-black">
          <Fade>
          
        


          <nav>

<article>
  <ul className="flex grid grid-cols-3">         
    <li><img
      src={estadao}
      alt="Tecnologia disruptiva"
      className="flex-initial rounded-3xl shadow-xl"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Tecnologia disruptiva: a próxima onda para engajamento dos cidadãos e das democracias</div>
    <br />
    <a href="https://fernandolucas.com.br/tecnologia-disruptiva-a-proxima-onda-para-engajamento-dos-cidadaos-e-das-democracias/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={borboletas}
      alt="Borboletas na barriga"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Borboletas na barriga</div>
    <br />
    <a href="https://fernandolucas.com.br/borboletas-na-barriga/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={maos}
      alt="Vamos dar as mãos?"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Vamos dar as mãos?</div>
    <br />
    <a href="https://fernandolucas.com.br/vamos-dar-as-maos/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={especie}
      alt="A nova espécie humana"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">A nova espécie humana</div>
    <br />
    <a href="https://fernandolucas.com.br/a-nova-especie-humana/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={incorruptibilidade}
      alt="Incorruptibilidade"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Incorruptibilidade: a cura para nossa doença</div>
    <br />
    <a href="https://fernandolucas.com.br/incorruptibilidade-a-cura-para-nossa-doenca/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={paraiso}
      alt="Paraíso Portátil"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Paraíso Portátil</div>
    <br />
    <a href="https://fernandolucas.com.br/paraiso-portatil/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={almazonia}
      alt="Almazônia"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Almazônia, a floresta em minha alma</div>
    <br />
    <a href="https://fernandolucas.com.br/almazonia-a-floresta-em-minha-alma/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={gaia}
      alt="Força de Gaia"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Força de Gaia</div>
    <br />
    <a href="https://fernandolucas.com.br/forca-de-gaia/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={triste}
      alt="Triste momento
      "
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Triste momento</div>
    <br />
    <a href="https://fernandolucas.com.br/triste-momento/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={erasmo}
      alt="Eu sou da turma do Erasmo"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Eu sou da turma do Erasmo</div>
    <br />
    <a href="https://fernandolucas.com.br/eu-sou-da-turma-do-erasmo/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={lagrima}
      alt="Sabor da própria lágrima"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Sabor da própria lágrima</div>
    <br />
    <a href="https://fernandolucas.com.br/sabor-da-propria-lagrima/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={poema}
      alt="Poema: Oração da mãe gentil"
      className="flex rounded-lg shadow-xl w-full mb-3md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Poema: Oração da mãe gentil</div>
    <br />
    <a href="https://fernandolucas.com.br/poema-oracao-da-mae-gentil/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>

    <li><img
      src={transformando}
      alt="Transformando a crise em aprendizado"
      className="flex rounded-lg shadow-xl w-full mb-3 md:w-4/5"/>
    <span className="uppercase">Artigo</span>
    <br />
    <div className="family-bold">Transformando a crise em aprendizado</div>
    <br />
    <a href="https://fernandolucas.com.br/transformando-a-crise-em-aprendizado/" target="blank" className="transition duration-500 ease-in-out bg-yellow2 transform w-full py-2 mt-5 family-bold uppercase w-12 text-black">Acesse</a>
    </li>
  </ul>

</article>
</nav>










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
              
               
          </Fade>
        </div>
      </ScrollableAnchor>
    );
  }