import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

import GlobalStyles from '../styles/globalStyles'

function Layout({ children, isHome }) {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <main id="content">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;