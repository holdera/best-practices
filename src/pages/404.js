import React from 'react'
import { Link } from 'gatsby'
import Layout from '@components/Layout'

import tw from 'twin.macro';
import { Heading1, link } from '@styles/ui'

function PageNotFound() {
    return(
        <Layout>
            <div tw='text-center text-white bg-blue'>
                <h1 css={[Heading1, tw`font-light`]}>Page Not Found</h1>
                <p>Click <Link css={link} to='/'>here</Link> to return to home</p>
            </div>
        </Layout>
    )
}

export default PageNotFound