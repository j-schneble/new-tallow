export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://schneble.io' : ''

export const defaultSEO = {
  title: 'Callowhill',
  description: 'Developer.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Callowhill',
    images: [
      {
        url: `${baseUrl}/blacklogo.png`,
        alt: 'Callowhill',
      },
    ],
  },
  
}

interface IExtendSEO {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: IExtendSEO) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}