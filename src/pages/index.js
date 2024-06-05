import React from 'react'
import Layout from '@components/Layout'
import Hero from '@components/Hero'

import tw from 'twin.macro'
import { AnchorLink, Heading2, Heading3, Paragraphs } from '@styles/ui'

function IndexPage() {
    const divContainer = tw`container my-5 pt-4 px-5 lg:(my-8 px-0)`
    const ulList = tw`pl-5 list-disc mb-5 [li]:mb-2 [li]:last-of-type:mb-0`

    return (
        <Layout>
            <Hero />
            <div css={divContainer}>
                <Heading2 css={[tw`mb-0 lg:mb-0`]}>How to use Twin.macro effectively</Heading2>

                <Paragraphs>
                    Twin.Macro is the combination of css and javascript. It binds <em>Emotion</em>{' '}
                    (a library created for writing css styes with javascript) and{' '}
                    <em>TailwindCss</em> (a utility class css framework to design digital
                    applications).
                </Paragraphs>

                <Paragraphs>
                    Twin.macro is a library for using css-in-js with Tailwind and React. It
                    pre-processes your classnames with babel at compile-time and turns them into CSS
                    objects, which in turn go into your css-in-js library of choice.
                </Paragraphs>

                <Heading3>
                    Why <strong>should</strong> we use <em>Twin.macro?</em>
                </Heading3>

                <Paragraphs>We should use Twin.macro because of the following:</Paragraphs>

                <ul css={ulList}>
                    <li>It is a great way to write css in javascript</li>
                    <li>
                        It's very fast and doesn't add any code to your bundle since it's
                        pre-processed at compile-time.
                    </li>
                    <li>Makes it easy for your components to support variants</li>
                    <li>It's easy to read and write</li>
                    <li>It's easy to use</li>
                    <li>It's easy to maintain</li>
                    <li>It's easy to scale</li>
                    <li>It's easy to customize</li>
                </ul>

                <Paragraphs>The negatives of TailwindCss on its own:</Paragraphs>

                <ul css={ulList}>
                    <li>It's hard to read</li>
                    <li>It bloats your code</li>
                </ul>

                <Paragraphs>
                    With Twin.macro, you can use TailwindCss with the following benefits:
                </Paragraphs>

                <Heading3>Styled Components</Heading3>

                <Paragraphs>
                    I highly recommend using Styled Components. It's easier to read and understand.
                    The code itself looks cleaner and less convoluted. Our goal is that any dev can
                    look at the code and quickly understand how to make updates and changes.
                </Paragraphs>

                <Heading3>Resources</Heading3>

                <ul css={ulList}>
                    {/* <li><Anchor>Twin Macro</Anchor></li> */}
                    <li>
                        <AnchorLink
                            href='https://github.com/ben-rogerson/twin.macro'
                            target='_blank'
                        >
                            Twin Macro
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink href='https://tailwindcss.com/' target='_blank'>
                            TailwindCss
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            href='https://bendyworks.com/blog/refactoring-tailwind-css-react-with-twin-macro#:~:text=our%20React%20components.-,Twin.,Styled%20Components'
                            target='_blank'
                        >
                            Refactoring Tailwind CSS React Apps with Twin.macro
                        </AnchorLink>
                    </li>
                    <li>
                        <AnchorLink
                            href='https://blog.logrocket.com/intro-to-twin/'
                            target='_blank'
                        >
                            Intro to Twin: Combining the best of Tailwind and CSS-in-JS
                        </AnchorLink>
                    </li>
                </ul>

                <Paragraphs>
                    I highly recommend using Styled Components. It's easier to read and understand.
                    The code itself looks cleaner and less convoluted. Our goal is that any dev can
                    look at the code and quickly understand how to make updates and changes.
                </Paragraphs>
            </div>
        </Layout>
    )
}

export default IndexPage
