export const PROJECTS_QUERY = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    "slug": slug.current,
    tagline,
    overview,
    role,
    year,
    duration,
    status,
    techStack,
    liveUrl,
    githubUrl,
    coverImage,
    galleryImages,
    order
  }
`

export const PROJECT_BY_SLUG_QUERY = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    tagline,
    overview,
    role,
    year,
    duration,
    status,
    techStack,
    liveUrl,
    githubUrl,
    coverImage,
    galleryImages,
    order
  }
`
