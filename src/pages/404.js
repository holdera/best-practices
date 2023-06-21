import React from 'react'
import { Link } from 'gatsby'
import Layout from '@components/Layout'

import tw from 'twin.macro';
import { Heading1, link } from '@styles/ui'

function PageNotFound() {
    return(
        <Layout>
            <div tw='text-center min-h-[900px]'>
                <Heading1 css={tw`mt-11 font-light`}>Page Not Found</Heading1>
                <p>Click <Link css={[link, tw`text-blue`]} to='/'>here</Link> to return to home</p>
            </div>
        </Layout>
    )
}

export default PageNotFound