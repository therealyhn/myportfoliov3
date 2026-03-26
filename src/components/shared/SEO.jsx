import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Jovan Ljusic'
const SITE_URL = 'https://jovanljusic.com'
const DEFAULT_DESCRIPTION =
  'Frontend Engineer building fast, modern web applications. React, Vite, PHP, MySQL — from design to deployment.'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Frontend Engineer`
  const fullUrl = url ? `${SITE_URL}${url}` : SITE_URL

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullUrl} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="google-site-verification" content="c7vnv5otwEqqxRlMzziphpaRg60bw8ukUVs7yaFATyA" />

      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}
