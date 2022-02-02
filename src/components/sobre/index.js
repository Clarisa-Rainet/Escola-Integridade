import React from 'react';
import {Fade} from "react-reveal";
import ScrollableAnchor, {goToAnchor} from 'react-scrollable-anchor';

export default function Page() {
    return (
        <ScrollableAnchor id={'sobre'}>
        <div className='block lg:flex sobre w-full content-center justify-center px-10 py-16 lg:py-72 lg:px-20 2xl:px-52'>
            <div className='w-full lg:w-2/12'>
                <Fade left duration={2000}>
                    <div className='title font-lg'>
                        Sobre a <br/>
                        <strong className='font-big family-bold'>Rocket It</strong>
                    </div>
                </Fade>
                <Fade up duration={2000} delay={500}>
                    <div className='line-height mt-8 lg:mt-16 family-light header font-gray font-normal'>
                        Você já pensou o quanto o mundo digital pode ser transformador para o seu negócio? É muito além
                        das redes sociais.<strong> Crie seu próprio terreno e transforme-o em fértil.</strong>
                    </div>
                </Fade>
            </div>
            <Fade duration={2000} delay={250}>
                <div className='w-full ld:w-8/12 mx-0 mt-16 lg:ml-32 lg:mt-0 family-thin line-height font-medium'>
                    Parece estranho falar isso, mas as <strong>redes sociais hoje em dia são apenas “terrenos
                    locados”</strong> que podem
                    cair a qualquer momento, diferente de um site ou aplicativo que é construído para gerar vida ao
                    digital
                    da sua empresa.
                    <br/><br/>
                    Através de especialistas nas diversas frentes de desenvolvimento e tecnologia, <strong>a ROCKET IT
                    bota
                    muita
                    hidrazina no foguete e decola junto a sua empresa</strong>, levando inovação e energia a grandes
                    projetos do
                    âmbito digital.
                    <br/><br/>
                    A Rocket It é uma fábrica de software que atua desde 2019 no mercado, criando inovações para um
                    ecossistema que cresce dia após dia. Nosso core é levar soluções de desenvolvimento através de
                    inteligências como:
                    <br/><br/>
                    <strong>NodeJs (backend), ReactJs (web-sites e sistemas) e React Native (mobile).</strong>
                    <br/><br/>
                    Pode até parecer clichê, mas o grande projeto da sua empresa pode estar a um clique do
                    desenvolvimento.
                    <br/><br/>
                    Quer saber mais sobre a Rocket It?
                    <br/><br/>
                    <Fade left duration={2000} delay={600}>
                        <button
                            onClick={() => goToAnchor('contato')}
                            className='transition duration-500 ease-in-out btn-red transform w-5/12 py-2 rounded-md family-bold uppercase'>Clique
                            aqui
                        </button>
                    </Fade>
                </div>
            </Fade>
        </div>
        </ScrollableAnchor>
    )
}
