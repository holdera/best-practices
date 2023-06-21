import React from 'react';
import 'twin.macro';

function Hero(){
    return(
        <section id="hero" className='hero' tw="bg-blue text-white py-6 lg:(py-40)">
            <div tw="text-center">
                <div tw="w-4/5 m-auto md:(max-w-[750px] w-full)">
                    <h2 tw="text-lg font-extralight lg:(text-[3.8rem] tracking-[.3rem])">Best Pracitices for TailwindCss & Twin.Macro</h2>
                </div>
                <div tw="mt-8">
                    <p tw="font-thin lg:(text-lg tracking-[.09rem])">A guide for Full Stack standardization</p>
                </div>   
            </div>
        </section>
    )
}

export default Hero;