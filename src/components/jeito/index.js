import React from 'react';
import {Fade} from "react-reveal";
import ScrollableAnchor, {goToAnchor} from 'react-scrollable-anchor';

export default function Page(props) {
    return (
        <ScrollableAnchor id={'nosso-jeito'}>
            <div
                className='block lg:flex jeito w-full content-center justify-center px-10 py-16 lg:py-72 lg:px-20 2xl:px-52'>
                <div className='w-full lg:w-2/12'>
                    <Fade left duration={2000}>
                        <div className='title font-lg'>
                            O jeito <br/>
                            <strong className='font-big family-bold'>Rocket</strong><br/>
                            de ser
                        </div>
                    </Fade>
                    <Fade up delay={600} duration={2000}>
                        <div className='line-height mt-16 family-light header font-gray font-normal'>
                            <strong>Evoluir no mercado de forma contínua</strong>, e se manter relevante diante ao
                            cenário concorrente requer uma equipe de especialistas criando
                            estratégias e tecnologias a seu favor, com <strong>suporte necessário a todo
                            instante</strong>.
                        </div>
                    </Fade>
                </div>
                <Fade duration={2000}>
                    <div
                        className='w-full ld:w-8/12 mx-0 mt-16 lg:ml-32 lg:mt-0 family-thin line-height font-medium descricao'>
                        A gente duvida que você nunca tenha acessado o site de seu concorrente e se deparado com
                        inovações
                        muito
                        melhores que a sua.
                        <br/><br/>
                        É por isso que o conceito da Rocket It diante do cliente é estudar estrategicamente o cenário
                        WEB e
                        de
                        DESENVOLVIMENTO com a intenção de trazer <strong>eficiência e evolução</strong> através da
                        gestão de
                        projetos para desenvolver o jeito certo do posicionamento da sua empresa, seja ele através de
                        sites
                        ou
                        até mesmo aplicativos.
                        <br/><br/>
                        Agende sua primeira consulta com nossos especialistas:
                        <br/><br/>
                        <Fade up duration={2000} delay={600}>
                            <button
                                onClick={() => goToAnchor('contato')}
                                className='transition duration-500 ease-in-out btn-red transform w-5/12 py-2 rounded-md family-bold uppercase'>Entre
                                em contato
                            </button>
                        </Fade>
                    </div>
                </Fade>
            </div>
        </ScrollableAnchor>
    )
}
