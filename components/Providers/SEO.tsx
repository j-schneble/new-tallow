import { DefaultSeo } from 'next-seo'
import Head from 'next/head'

import { defaultSEO } from '../../config/seo'

export function SEO() {
  return (
    <>
      <DefaultSeo {...defaultSEO} />

      <Head>
        <link rel='icon'  href='../../public/blacklogo.png' sizes='any' />
        <link
          rel='icon'
          href='../../public/blacklogo.png'
          type='image/svg+xml'
          sizes='any'
        />
        <link
          rel='apple-touch-icon'
          href='../../public/blacklogo.png'
        />
        <link rel='manifest' href='/static/favicons/site.webmanifest' />
      </Head>
    </>
  )
}