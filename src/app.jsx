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
  return (
    <main>
      <h1 className="text-3xl text-red-500">Hello, World!</h1>
      <p>This is a simple React application.</p>
    </main>
  )
}
