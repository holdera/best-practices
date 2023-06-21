import React from 'react'
import Layout from '@components/Layout'

import tw from 'twin.macro';
import { Heading2, Heading3, Paragraphs } from '@styles/ui'

function IndexPage() {
  const divContainer = tw`container my-5 pt-4 px-5 lg:(my-8 px-0)`
  const ulList = tw`pl-5 list-disc mb-5 [li]:mb-2 [li]:last-of-type:mb-0`
  return (
    <Layout>
      <div css={divContainer}>
        <Heading2 css={[tw`mb-0 lg:mb-0`]}>How to use Twin.macro effectivly</Heading2>
        <Paragraphs>(this is mock-up content, do not take seriously)</Paragraphs>

        <Paragraphs>Twin.Macro is the combination of css and javascript. It binds <em>Emotion</em> (a library created for writing css styes with javascript) and <em>TailwindCss</em> (a utility class css frameowrk to design digital applications).</Paragraphs>

        <Paragraphs>Twin.macro is a library for using css-in-js with Tailwind and React. It pre-procceses your classnames with babel at compile-time and turns them into CSS objects, which in turn go into your css-in-js library of choice.</Paragraphs>

        <Heading3>Why <strong>should</strong> we use <em>Twin.macro?</em></Heading3>

        <Paragraphs>We should use Twin.macro because of the following:</Paragraphs>

        <ul css={ulList}>
          <li>It is a great way to write css in javascript</li>
          <li>It's very fast and doesn't add any code to your bundle since it's pre-processed at compile-time.</li>
          <li>Makes it easy for your components to support variants</li>
        </ul>

        <Paragraphs>The negatives of TailwindCss on its own:</Paragraphs>

        <Paragraphs>With Twin.macro, you can use TailwindCss with the following benefits:</Paragraphs>

        <ul css={ulList}>
          <li>It's easy to read and write</li>
          <li>It's easy to use</li>
          <li>It's easy to maintain</li>
          <li>It's easy to scale</li>
          <li>It's easy to customize</li>
        </ul>

        <Paragraphs>I highly recommend to use Styled Components. It's easier to read and understand. The code itself looks cleaner and less convoluted</Paragraphs>

        <Paragraphs>Pie bonbon sugar plum sugar plum cotton candy topping. Bear claw pastry biscuit tootsie roll apple pie shortbread. Icing sugar plum pastry sesame snaps sweet roll macaroon brownie liquorice. Jelly-o pie muffin pastry jelly jujubes danish oat cake pie. Apple pie ice cream cotton candy wafer sweet. Biscuit chocolate candy canes powder cookie ice cream cake bear claw shortbread. Pie liquorice powder dessert dragée tootsie roll shortbread lemon drops ice cream. Jujubes toffee chupa chups jelly-o liquorice cheesecake apple pie.</Paragraphs>

        <Paragraphs>Oat cake tart jelly-o bonbon liquorice caramels chocolate caramels pudding. Lollipop chocolate cupcake halvah chocolate bar. Candy canes pudding tart caramels tiramisu gummi bears chocolate bar halvah marshmallow. Jujubes chupa chups dessert shortbread wafer. Toffee donut lemon drops liquorice croissant shortbread croissant. Muffin donut topping lollipop shortbread gummi bears. Cotton candy bonbon donut powder lollipop brownie pudding gummi bears candy canes. Powder fruitcake bear claw toffee cookie caramels.</Paragraphs>

        <Paragraphs>Chocolate bar muffin biscuit icing chocolate bar. Ice cream cake powder muffin jujubes macaroon apple pie jelly-o. Shortbread candy canes sugar plum liquorice apple pie pudding cheesecake chupa chups topping. Icing jelly cheesecake liquorice cupcake dragée brownie chocolate bar powder. Cotton candy pie lollipop danish liquorice bonbon. Cheesecake cake marshmallow biscuit muffin topping chocolate bar jelly gummi bears. Oat cake liquorice apple pie biscuit cheesecake tart jelly cotton candy. Candy sweet candy canes chocolate cake cake brownie dessert. Cotton candy pie chocolate tart shortbread gummies dragée chupa chups candy canes. Brownie cupcake tart biscuit jelly-o lemon drops jujubes.</Paragraphs>

        <Paragraphs>Tart toffee croissant cake apple pie liquorice. Macaroon jujubes biscuit caramels oat cake caramels. Sesame snaps gummi bears macaroon chocolate jelly beans brownie. Shortbread sugar plum icing croissant dragée soufflé candy canes lollipop gummi bears. Muffin gummies marshmallow jujubes ice cream. Cake jelly brownie ice cream pie liquorice dessert cheesecake soufflé. Toffee wafer gummi bears oat cake jelly-o lollipop gingerbread dessert soufflé. Jelly beans croissant bear claw ice cream jelly-o apple pie.</Paragraphs>

        <Paragraphs>Sweet sesame snaps toffee jelly-o icing oat cake. Tart lollipop cake tootsie roll marzipan tart chocolate lemon drops. Jelly beans sugar plum liquorice oat cake brownie donut. Cotton candy lemon drops caramels marzipan cupcake marshmallow. Powder jujubes topping bear claw topping gingerbread tart. Muffin bonbon pastry cookie dessert. Cupcake cupcake cupcake cheesecake oat cake jelly-o. Chocolate jujubes gummi bears gummi bears bear claw halvah toffee. Dragée gummi bears muffin bonbon marzipan liquorice. Biscuit wafer halvah fruitcake sweet lemon drops sesame snaps fruitcake. Chocolate tart tart biscuit gummies powder sesame snaps danish. Soufflé lemon drops cake marzipan croissant carrot cake cupcake. Chupa chups cake sesame snaps gingerbread cupcake tiramisu chocolate bar toffee. Chupa chups soufflé danish tootsie roll shortbread halvah lemon drops.</Paragraphs>

        <Paragraphs>Brownie pudding soufflé carrot cake danish muffin caramels oat cake. Sweet roll chocolate cake cupcake bear claw donut gummi bears lemon drops. Lollipop donut sugar plum candy canes dragée. Fruitcake caramels chupa chups bonbon gummies sugar plum bonbon sweet pastry. Dragée sesame snaps jelly tootsie roll muffin lollipop. Cotton candy carrot cake marshmallow sesame snaps topping cotton candy cake. Marzipan candy topping tiramisu chocolate cake chocolate dessert lollipop soufflé. Topping jelly beans sugar plum cookie apple pie jelly-o dessert. Cake donut muffin sugar plum powder. Wafer ice cream caramels chocolate bar apple pie carrot cake cake cake. Gummies topping chupa chups candy canes lemon drops bear claw cupcake gingerbread. Shortbread pie tootsie roll chocolate bar jelly-o. Sweet roll jelly beans jujubes gummies lollipop sesame snaps.</Paragraphs>
      </div>
    </Layout>
  )
}

export default IndexPage
