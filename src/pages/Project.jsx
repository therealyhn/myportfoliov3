import { useParams } from 'react-router-dom'

function Project() {
  const { slug } = useParams()

  return (
    <main>
      {/* project page — slug: {slug} */}
    </main>
  )
}

export default Project
