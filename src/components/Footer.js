import React from 'react'
import 'twin.macro'

function Footer() {
    return (
        <footer id='footer' className='footer' tw='bg-blue py-8 lg:py-8'>
            <div className='copyright' tw='text-white text-center'>
                <p tw='text-white mb-3.5 xl:leading-none'>
                    Disclaimer: I currently did this at my time at Klick Health, for the{' '}
                    <i>Full Stack</i> team. I&nbsp;no longer work there.
                </p>
                <p tw='text-white leading-none'>&copy; 2023 Alannah Holder</p>
            </div>
        </footer>
    )
}

export default Footer
