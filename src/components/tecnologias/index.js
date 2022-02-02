import React from 'react';
import {Fade} from "react-reveal";
import ScrollableAnchor, {goToAnchor} from 'react-scrollable-anchor';

export default function Page() {
    return (
        <ScrollableAnchor id={'tecnologias'}>
            <div className='tecnologias w-full'>
                <div className='w-full block lg:flex items-stretch'>
                    <div className='w-full lg:w-1/2 flex bg-red tec_left justify-end p-8 lg:p-12'>
                        <Fade left duration={2000}>
                            <div className='w-full md:w-8/12 lg:w-10/12 2xl:w-10/12'>
                                <div className='title-black font-lg'>
                                    <strong className='font-big family-bold'>Tecnologias</strong> <br/>
                                    Utilizadas
                                </div>
                                <div className='line-height mt-16 family-light header font-white font-normal'>
                                    <strong>O mundo está online</strong> e a sua empresa/seu produto? <br/>
                                    Desenvolvemos soluções personalizadas para empresas de todos os
                                    segmentos, <strong>mais do que clientes, temos parceiros de longa data</strong>.
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='w-full lg:w-1/2 flex p-6 lg:p-12 items-center'>
                        <div className='w-full md:w-8/12 lg:w-10/12 2xl:w-10/12 py-10'>
                            <div className='w-full title-red block 2xl:flex items-center'>
                                <div><strong>FRONT-END</strong></div>
                                <div>WEB & MOBILE</div>
                            </div>
                            <div className='w-full'>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-100 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">HTML & CSS</div>
                                </div>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-11/12 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">JavaScript</div>
                                </div>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-100 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">Bootstrap & Tailwind</div>
                                </div>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-11/12 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">ReactJs</div>
                                </div>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-10/12 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">React Native</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full block lg:flex items-stretch'>
                    <div className='w-full lg:w-1/2 flex p-6 lg:p-12 items-center justify-end'>
                        <div className='w-full md:w-8/12 lg:w-10/12 2xl:w-10/12 py-10'>
                            <div className='w-full title-red block 2xl:flex items-center'>
                                <div><strong>BACK-END</strong></div>
                                <div>BANCO DE DADOS & INFRA</div>
                            </div>
                            <div className='w-full'>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-10/12 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">NodeJs</div>
                                </div>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-11/12 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">SqlServer & MysqL</div>
                                </div>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-11/120 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">MongoDB</div>
                                </div>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-9/12 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">Docker</div>
                                </div>
                                <div className="flex flex-row mt-5">
                                    <div className="w-2/5 lg:w-2/5 2xl:w-3/5 bg-gray-500 h-4 rounded-lg">
                                        <Fade effect="fadeInLeft" duration={500} delay={200}>
                                            <div className="w-10/12 bg-white h-4 rounded-lg"></div>
                                        </Fade>
                                    </div>
                                    <div className="h-3 ml-8 text-white align-top -mt-1">Amazon (AWS)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/2 flex bg-red tec_dir justify-start p-12'>
                        <div className='flex md:w-8/12 lg:w-10/12 2xl:w-10/12 items-center'>
                            <Fade right duration={2000}>
                                <div className='line-height family-light font-medium font-white'>
                                    Somos especialistas em Desenvolvimento <strong>Web (sites, sistemas digitais,
                                    aplicativos) e
                                    Mobile</strong>.
                                    Utilizamos as tecnologias descritas abaixo para ativar a sua <strong>transformação
                                    digital</strong> e modernizar o seu produto.<br/><br/>
                                    <button
                                        onClick={() => goToAnchor('contato')}
                                        className='transition duration-500 ease-in-out btn-black transform w-7/12 py-2 rounded-md family-bold uppercase'>Vamos
                                        conversar?
                                    </button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </ScrollableAnchor>
    )
}
