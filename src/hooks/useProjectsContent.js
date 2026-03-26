import { useState, useEffect } from 'react'
import sanityClient from '../lib/sanityClient'
import { PROJECTS_QUERY } from '../lib/sanityQueries'
import { urlFor } from '../lib/sanityImage'

function normalizeProject(raw, lang) {
  const sr = lang === 'sr'
  return {
    id: raw._id,
    title: (sr && raw.title_sr) || raw.title,
    slug: raw.slug,
    tagline: (sr && raw.tagline_sr) || raw.tagline || '',
    overview: (sr && raw.overview_sr) || raw.overview || '',
    role: (sr && raw.role_sr) || raw.role || '',
    year: raw.year || '',
    duration: raw.duration || '',
    status: raw.status || '',
    techStack: Array.isArray(raw.techStack) ? raw.techStack : [],
    liveUrl: raw.liveUrl || null,
    githubUrl: raw.githubUrl || null,
    image: raw.coverImage ? urlFor(raw.coverImage).width(800).auto('format').quality(80).url() : null,
    galleryImages: Array.isArray(raw.galleryImages)
      ? raw.galleryImages.map((img) => urlFor(img).width(1400).auto('format').quality(80).url())
      : [],
    order: raw.order ?? 999,
  }
}

export default function useProjectsContent(lang = 'en') {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [raw, setRaw] = useState([])

  useEffect(() => {
    let cancelled = false

    sanityClient
      .fetch(PROJECTS_QUERY)
      .then((data) => {
        if (!cancelled) {
          setRaw(data)
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

  const data = raw.map((p) => normalizeProject(p, lang))

  return { loading, error, data }
}
