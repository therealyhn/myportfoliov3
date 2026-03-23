import { useState, useEffect } from 'react'
import sanityClient from '../lib/sanityClient'
import { PROJECTS_QUERY } from '../lib/sanityQueries'
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
    image: raw.coverImage ? urlFor(raw.coverImage).width(800).auto('format').url() : null,
    galleryImages: Array.isArray(raw.galleryImages)
      ? raw.galleryImages.map((img) => urlFor(img).width(1400).auto('format').url())
      : [],
    order: raw.order ?? 999,
  }
}

export default function useProjectsContent() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    let cancelled = false

    sanityClient
      .fetch(PROJECTS_QUERY)
      .then((raw) => {
        if (!cancelled) {
          setData(raw.map(normalizeProject))
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err)
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { loading, error, data }
}
