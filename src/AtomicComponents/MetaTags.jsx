import Head from 'next/head'
import React from 'react'

const MetaTags = ({title = "Cream"}) => {
  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content="A Luxury Platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property='og:image' content='./logo2.png' />
      </Head>
  )
}

export default MetaTags