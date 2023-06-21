import React, {useRef, useLayoutEffect} from 'react';
import { gsap } from 'gsap';
import 'twin.macro';

function Hero(){
    const bgEffect = useRef();

    function bgAnimation() {
        const gradient1 = 'linear-gradient(to right, rgba(37,38,183,0.65) 0%,rgba(37,38,183,0.63) 3%,rgba(8,9,42,0) 78%,rgba(0,0,0,0) 100%)'
        const gradient2 = 'linear-gradient(45deg, rgba(0,0,0,0) 0%,rgba(36,4,56,0) 22%,rgba(158,19,245,0.63) 97%,rgba(158,19,245,0.65) 100%)'
        let ctx = gsap.context(() => {
            const bgTween = gsap.fromTo(bgEffect.current, 
                    { 
                        background: gradient1
                    },
                    { 
                        duration: 6, 
                        background: gradient2, 
                        repeat: -1, 
                        yoyo: true, 
                        ease: 'slow(0.1, 0.4, false)'
                    }
                );
            bgTween.play();

        }, bgEffect);
        return () => ctx.revert();
    }

    useLayoutEffect(() => {
        bgAnimation();
    }, [])
    return(
        <section id="hero" className='hero' tw="bg-blue text-white relative py-6 overflow-hidden lg:(py-40)">
            <div ref={bgEffect} tw="absolute inset-0 top-0 w-full h-full"></div>
            <div tw="text-center relative z-20">
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