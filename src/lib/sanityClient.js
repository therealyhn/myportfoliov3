import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: 'va67sdm9',
  dataset: 'production',
  apiVersion: '2024-06-01',
  useCdn: true,
})

export default sanityClient
