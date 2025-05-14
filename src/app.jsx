import Header from './components/header'
import StarshipGrid from './components/starship-grid/index'
import { useState, useEffect } from 'react'

const options = {
  method: 'GET',

  // `headers` notify the API that we want JSON data
  headers: {
    accept: 'application/json',
  },
}

export default function App() {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipDetails = async () => {
      try {
        const response = await fetch('https://swapi.tech/api/starships/', options)
        const data = await response.json()

        // Fetch detailed information for each starship
        const detailedStarships = await Promise.all(
          data.results.map(async (ship) => {
            const detailResponse = await fetch(ship.url, options)
            const detailData = await detailResponse.json()
            return detailData.result.properties
          }),
        )

        setStarships(detailedStarships)
      } catch (error) {
        console.error('Error fetching starships:', error)
      }
    }

    fetchStarshipDetails()
  }, [])

  return (
    <main>
      <h1 className="text-3xl text-red-500">Hello, World!</h1>
      <p>This is a simple React application.</p>
    </main>
  )
}
