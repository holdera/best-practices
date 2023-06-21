import React, { useState, useEffect } from 'react';
import tw from 'twin.macro';

function Header(){
    const [active, setActive] = useState(false);

    function activateHeader() {
        const hero = document.querySelector('.hero');
        if ( hero && window.pageYOffset >= hero.offsetHeight ) {
            setActive(true);
        } else {
            setActive(false);
        }
    }

    function windowScrollToItem(item) {
        const itemToScrollTo = document.querySelector(item);
        if (itemToScrollTo) {
            itemToScrollTo.scrollIntoView({behavior: 'smooth'});
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll', activateHeader);
        document.querySelector('.header a').addEventListener('click', (e) => {
            e.preventDefault();
            windowScrollToItem(e.target.getAttribute('href'));
        });
    }, [])

    const logo = tw`text-white font-bold text-lg lg:(text-xl)`
    const showifActive = !active ? tw`hidden` : tw`block`

    return(
        <header id="header" css={[tw`px-5 fixed top-0 bg-blue py-4 text-white w-full lg:px-0`, showifActive ]} className='header'>
            <div tw="container flex justify-between">
                <div className='logo' css={logo}>
                    <h1 tw="leading-none">Best Pracitices</h1>
                </div>
                <div>
                    <a href="#hero">Back to top</a>
                </div>
            </div>
        </header>
    )
}

export default Header;