import React from 'react'
import { Global, css } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const custom = css`
    html {
        font-size: 16px;
    }

    body {
        hyphens: none;
        box-sizing: border-box;
    }


`

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <Global styles={custom} />
    </>
)

export default GlobalStyles