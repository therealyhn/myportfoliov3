import { useState, useEffect } from 'react'
import sanityClient from '../lib/sanityClient'
import { PROJECT_BY_SLUG_QUERY } from '../lib/sanityQueries'
import { urlFor } from '../lib/sanityImage'

function normalizeProject(raw) {
  return {
    id: raw._id,
    title: raw.title,
    slug: raw.slug,
    tagline: raw.tagline || '',
    overview: raw.overview || '',
    role: raw.role || '',
    year: raw.year || '',
    duration: raw.duration || '',
    status: raw.status || '',
    techStack: Array.isArray(raw.techStack) ? raw.techStack : [],
    liveUrl: raw.liveUrl || null,
    githubUrl: raw.githubUrl || null,
    image: raw.coverImage ? urlFor(raw.coverImage).width(1200).auto('format').url() : null,
    galleryImages: Array.isArray(raw.galleryImages)
      ? raw.galleryImages.map((img) => urlFor(img).width(1400).auto('format').url())
      : [],
  }
}

export default function useProjectContent(slug) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!slug) return
    let cancelled = false

    setLoading(true)
    setError(null)

    sanityClient
      .fetch(PROJECT_BY_SLUG_QUERY, { slug })
      .then((raw) => {
        if (!cancelled) {
          setData(raw ? normalizeProject(raw) : null)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err)
          setLoading(false)
        }
      })

    return () => { cancelled = true }
  }, [slug])

  return { loading, error, data }
}
