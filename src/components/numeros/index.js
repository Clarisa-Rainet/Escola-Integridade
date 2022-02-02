import React from 'react';
import {Fade, Flip} from "react-reveal";
import CountUp from 'react-countup';
import ScrollableAnchor from 'react-scrollable-anchor';

export default function Page() {
    return (
        <ScrollableAnchor id={'numeros'}>
        <div className='flex numeros w-full px-10 py-16 lg:py-36 2xl:py-72 lg:px-20 2xl:px-52 flex-wrap justify-center'>
            <div className='w-full lg:w-10/12 grid gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-8 2xl:gap-x-8 2xl:gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4'>
                <Fade up duration={2000}>
                    <div className='w-auto border-white border p-8 mx-2 items-center'>
                        <div className='flex w-full items-center justify-center'>
                            <Flip left delay={1000}>
                                <div
                                    className='rounded-full h-36 w-36 flex items-center justify-center border family-bold bg-black bg-opacity-40'>
                                        <CountUp start={0} end={1535} duration={5} />
                                </div>
                            </Flip>
                        </div>
                        <div className='w-full text-2xl text-center mt-8 family-thin uppercase'>Cafés</div>
                    </div>
                </Fade>
                <Fade up duration={2000} delay={200}>
                    <div className='w-auto border-white border p-8 mx-2 items-center'>
                        <div className='flex w-full items-center justify-center'>
                            <Flip left delay={1500}>
                                <div
                                    className='rounded-full h-36 w-36 flex items-center justify-center border family-bold bg-black bg-opacity-40'>
                                    <CountUp delay={2} start={0} end={438} duration={3} />
                                </div>
                            </Flip>
                        </div>
                        <div className='w-full text-2xl text-center mt-8 family-thin uppercase'>Copos de refri</div>
                    </div>
                </Fade>
                <Fade up duration={2000} delay={400}>
                    <div className='w-auto border-white border p-8 mx-2 items-center'>
                        <div className='flex w-full items-center justify-center'>
                            <Flip left delay={2000}>
                                <div
                                    className='rounded-full h-36 w-36 flex items-center justify-center border family-bold bg-black bg-opacity-40'>
                                    <CountUp delay={2} start={0} end={5} duration={1} />
                                </div>
                            </Flip>
                        </div>
                        <div className='w-full text-2xl text-center mt-8 family-thin uppercase'>Clientes</div>
                    </div>
                </Fade>
                <Fade up duration={2000} delay={600}>
                    <div className='w-auto border-white border p-8 mx-2 items-center'>
                        <div className='flex w-full items-center justify-center'>
                            <Flip left delay={2500}>
                                <div
                                    className='rounded-full h-36 w-36 flex items-center justify-center border family-bold bg-black bg-opacity-40'>
                                    <CountUp delay={3} start={0} end={17} duration={2} />
                                </div>
                            </Flip>
                        </div>
                        <div className='w-full text-2xl text-center mt-8 family-thin uppercase'>Projetos</div>
                    </div>
                </Fade>
            </div>
        </div>
        </ScrollableAnchor>
    )
}
