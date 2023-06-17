import '../styles/globals.css'

import { ReactChild, ReactFragment, ReactPortal } from 'react'


import type { AppProps } from 'next/app'

import Layout from '../../components/Layout/index'
import { Providers } from '../../components/Providers/index'

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (
    page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
  ) => (
    
      <Providers pageProps={pageProps}>
        <Layout>{page}</Layout>
      </Providers>

  )

  return getLayout(<Component {...pageProps} />)
}

export default MyApp