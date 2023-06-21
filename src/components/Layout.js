import React from 'react';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Footer from '@components/Footer';

import GlobalStyles from '../styles/globalStyles'

function Layout({ children, isHome }) {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <Hero />
            <main id="content">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;